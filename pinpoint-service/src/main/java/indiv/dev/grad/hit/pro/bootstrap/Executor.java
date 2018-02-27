package indiv.dev.grad.hit.pro.bootstrap;

import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CountDownLatch;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-26 18:03
 */
public abstract class Executor implements Watcher{
    private static final int SESSION_TIME = 5000;
    private boolean dead = false;
    private String host;
    protected ZooKeeper zooKeeper;
    protected CountDownLatch countDownLatch = new CountDownLatch(1);

    private static final Logger logger = LoggerFactory.getLogger(Executor.class);

    public Executor() {

    }

    public Executor(String host) {
        this.host = host;
        // 尝试连接Zk
        try {
            connect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void connect() throws IOException, InterruptedException {
        zooKeeper = new ZooKeeper(host, SESSION_TIME, this);
//        countDownLatch.await(); // 挂起当前服务
    }

    public void process(WatchedEvent watchedEvent) {
        if (watchedEvent.getState() == Event.KeeperState.SyncConnected) {
//            countDownLatch.countDown();
            logger.info("In Executor: Connection Established.");
        }
    }

    public void close() throws InterruptedException {
        dead = true;
        zooKeeper.close();
    }

    public boolean getStatus() {
        return dead;
    }

    /**
     *
     *<b>function:</b>创建持久态的znode,比支持多层创建.比如在创建/parent/child的情况下,无/parent.无法通过
     *@author cuiran
     *@createDate 2013-01-16 15:08:38
     *@param path
     *@param data
     *@throws KeeperException
     *@throws InterruptedException
     */
    public abstract void create(String path,byte[] data) throws KeeperException, InterruptedException;

    /**
     *
     *<b>function:</b>获取节点信息
     *@author cuiran
     *@createDate 2013-01-16 15:17:22
     *@param path
     *@throws KeeperException
     *@throws InterruptedException
     */
    public abstract List<String> getChild(String path) throws KeeperException, InterruptedException;

    public abstract byte[] getData(String path) throws KeeperException, InterruptedException;
}
