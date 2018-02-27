package indiv.dev.grad.hit.pro.service.impl;

import indiv.dev.grad.hit.pro.bootstrap.Executor;
import indiv.dev.grad.hit.pro.bootstrap.ExecutorBuilder;
import indiv.dev.grad.hit.pro.service.ZkService;
import org.apache.zookeeper.KeeperException;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-27 11:12
 */
public class ZkServiceImpl implements ZkService {
    public List<String> getListInNode(String path) {
        Executor executor = ExecutorBuilder.getInstance();
        List<String> list = null;
        try {
            list = executor.getChild(path);
        } catch (KeeperException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return list;
    }
}
