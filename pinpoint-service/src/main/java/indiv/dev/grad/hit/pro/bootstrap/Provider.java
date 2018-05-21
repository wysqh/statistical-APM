package indiv.dev.grad.hit.pro.bootstrap;

import indiv.dev.grad.hit.pro.constant.KafkaProperties;
import indiv.dev.grad.hit.pro.utils.kafka.Consumer;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;
import java.lang.management.ManagementFactory;

public class Provider {
    public static void main(String[] args) {
        System.out.println("程序开始");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"provider.xml"});
        try {
            context.start();
        }catch (Exception e){
            e.printStackTrace();
        }
        System.out.println("服务方开始服务");
        ExecutorBuilder.getInstance();
        ConsumerFactory.getConsumer().start();  // 消息接收线程
        ConsumerFactory.getConsumer(KafkaProperties.TOPIC2).start(); // 相关性分析接收线程
        ConsumerFactory.getConsumer(KafkaProperties.TOPIC3).start(); // 性能数据接收线程
        // get name representing the running Java virtual machine.
        String name = ManagementFactory.getRuntimeMXBean().getName();
        System.out.println(name);
        // get pid
        String pid = name.split("@")[0];
        System.out.println("Pid is:" + pid);
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


