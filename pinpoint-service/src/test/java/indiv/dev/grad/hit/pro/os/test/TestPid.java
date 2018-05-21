package indiv.dev.grad.hit.pro.os.test;

import java.lang.management.ManagementFactory;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 9:23
 */
public class TestPid {
    public static void main(String[] args) {
        // get name representing the running Java virtual machine.
        String name = ManagementFactory.getRuntimeMXBean().getName();
        System.out.println(name);
        // get pid
        String pid = name.split("@")[0];
        System.out.println("Pid is:" + pid);
    }
}
