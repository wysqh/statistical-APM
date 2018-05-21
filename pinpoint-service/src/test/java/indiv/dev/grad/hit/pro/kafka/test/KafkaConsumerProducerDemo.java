package indiv.dev.grad.hit.pro.kafka.test;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-10 16:24
 */
public class KafkaConsumerProducerDemo {
    public static void main(String[] args) {
        boolean isAsync = args.length == 0 || !args[0].trim().equalsIgnoreCase("sync");
//        Producer producerThread = new Producer(KafkaProperties.TOPIC3, isAsync);
//        producerThread.start();
        Consumer consumerThread = new Consumer(KafkaProperties.TOPIC3);
        consumerThread.start();
    }
}
