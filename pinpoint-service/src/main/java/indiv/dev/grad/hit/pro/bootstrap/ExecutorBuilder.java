package indiv.dev.grad.hit.pro.bootstrap;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooDefs;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-27 10:41
 */
public class ExecutorBuilder {
    private volatile static DataMonitor instance;
    private static final String HOSTS = "127.0.0.1";

    private static final Logger logger = LoggerFactory.getLogger(ExecutorBuilder.class);

    private ExecutorBuilder() {

    }

    public static DataMonitor getInstance() {
        if (instance == null) {
            synchronized (ExecutorBuilder.class) {
                if (instance == null) {
                    instance = new DataMonitor(HOSTS);
                }
            }
        }
        return instance;
    }

    public static void destroy() {
        try {
            if (instance != null) {
                instance.close();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private static class DataMonitor extends Executor {
        private DataMonitor(String host) {
            super(host);
        }

        public void create(String path, byte[] data) throws KeeperException, InterruptedException {
            this.zooKeeper.create(path, data, ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
        }

        public List<String> getChild(String path) throws KeeperException, InterruptedException {
            return this.zooKeeper.getChildren(path, false);
        }

        public byte[] getData(String path) throws KeeperException, InterruptedException {
            return this.zooKeeper.getData(path, false, null);
        }
    }
}
