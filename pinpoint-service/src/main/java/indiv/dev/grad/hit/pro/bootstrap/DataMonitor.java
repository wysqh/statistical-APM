package indiv.dev.grad.hit.pro.bootstrap;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooDefs;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-26 19:17
 */
public class DataMonitor extends Executor {
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
