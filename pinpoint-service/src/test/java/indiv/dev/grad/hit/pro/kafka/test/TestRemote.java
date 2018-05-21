package indiv.dev.grad.hit.pro.kafka.test;

import indiv.dev.grad.hit.pro.bootstrap.ConsumerFactory;
import indiv.dev.grad.hit.pro.constant.KafkaProperties;
import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.utils.BlockBuffer;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.kafka.Consumer;
import indiv.dev.kafka.ProducerFactory;
import org.apache.ibatis.session.SqlSession;
import org.gridkit.jvmtool.SJK;

import java.lang.management.ManagementFactory;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 17:18
 */
public class TestRemote {
    public static void main(String[] args) {
        // 开启Kafka线程
        // get name representing the running Java virtual machine.
        String name = ManagementFactory.getRuntimeMXBean().getName();
        System.out.println(name);
        // get pid
        String pid = name.split("@")[0];
        System.out.println("Pid is:" + pid);
        String arg = "-n 20 -o CPU -p " + pid;
        String[] cmds = arg.split("\\s");
        ProducerFactory.getProducer(indiv.dev.kafka.KafkaProperties.TOPIC3).setDaemon(true);
        ProducerFactory.getProducer(indiv.dev.kafka.KafkaProperties.TOPIC3).start();
        String[] cmd = new String[cmds.length + 1];
        System.arraycopy(cmds, 0, cmd, 1, cmds.length);
        cmd[0] = "ttop";
        SJK.main(cmd);
    }
}
