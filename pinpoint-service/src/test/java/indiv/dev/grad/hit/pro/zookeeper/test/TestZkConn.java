package indiv.dev.grad.hit.pro.zookeeper.test;

import indiv.dev.grad.hit.pro.bootstrap.Executor;
import indiv.dev.grad.hit.pro.bootstrap.ExecutorBuilder;
import org.apache.zookeeper.KeeperException;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-27 11:06
 */
public class TestZkConn {
    public static void main(String[] args) {
        Executor executor = ExecutorBuilder.getInstance();
        List<String> list = null;
        try {
            list = executor.getChild("/dubbo");
        } catch (KeeperException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        for (String str: list) {
            System.out.println(str);
        }
    }
}
