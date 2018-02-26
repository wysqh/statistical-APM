package indiv.dev.grad.hit.pro.zookeeper.test;

import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;

import java.io.IOException;
import java.util.concurrent.CountDownLatch;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-26 17:27
 */
public class AbstractZooKeeper implements Watcher {
    //缓存时间
    private static final int SESSION_TIME   = 2000;
    protected ZooKeeper zooKeeper;
    protected CountDownLatch countDownLatch = new CountDownLatch(1);

    public void connect(String hosts) throws IOException, InterruptedException{
        zooKeeper = new ZooKeeper(hosts,SESSION_TIME,this);
        countDownLatch.await();
    }

    /* (non-Javadoc)
     * @see org.apache.zookeeper.Watcher#process(org.apache.zookeeper.WatchedEvent)
     */
    public void process(WatchedEvent event) {
        // TODO Auto-generated method stub
        if(event.getState()== Event.KeeperState.SyncConnected){
            System.out.println("Executed");
            countDownLatch.countDown();
        }
    }

    public void close() throws InterruptedException{
        zooKeeper.close();
    }
}