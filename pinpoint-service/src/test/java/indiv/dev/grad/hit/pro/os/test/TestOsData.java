package indiv.dev.grad.hit.pro.os.test;


import indiv.dev.kafka.ProducerFactory;
import org.gridkit.jvmtool.SJK;

import java.lang.management.ManagementFactory;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 8:52
 */
public class TestOsData {
    public static void main(String[] args) {
        String name = ManagementFactory.getRuntimeMXBean().getName();
        System.out.println(name);
        String pid = name.split("@")[0];
        System.out.println("Pid is:" + pid);
        String arg = "-n 20 -o CPU -p " + pid;
        String[] cmds = arg.split("\\s");
        ProducerFactory.getProducer("performance").setDaemon(true);
        ProducerFactory.getProducer("performance").start();
        String[] cmd = new String[cmds.length + 1];
        System.arraycopy(cmds, 0, cmd, 1, cmds.length);
        cmd[0] = "ttop";
        SJK.main(cmd);
    }
}
