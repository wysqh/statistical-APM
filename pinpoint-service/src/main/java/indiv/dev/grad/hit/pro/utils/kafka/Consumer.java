package indiv.dev.grad.hit.pro.utils.kafka;

import indiv.dev.grad.hit.pro.constant.KafkaProperties;
import indiv.dev.grad.hit.pro.utils.BlockBuffer;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.util.Collections;
import java.util.Properties;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-11 14:49
 */
public class Consumer extends Thread {
    private final KafkaConsumer<Integer, String> consumer;
    private final String topic;
    private final BlockBuffer block;

    public Consumer(String topic) {
        Properties props = new Properties();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, KafkaProperties.KAFKA_SERVER_ADDRESS
                + ":" + KafkaProperties.KAFKA_SERVER_PORT);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "apmConsumer");
        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, "true");
        props.put(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG, "1000");
        props.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, "30000");
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.IntegerDeserializer");
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");

        consumer = new KafkaConsumer<Integer, String>(props);
        this.topic = topic;
        block = new BlockBuffer<>();
    }

    public void run() {
        consumer.subscribe(Collections.singletonList(this.topic));
        while (true) {
            ConsumerRecords<Integer, String> records = consumer.poll(10000);
            for (ConsumerRecord<Integer, String> record: records) {
                if (KafkaProperties.EOF.equals(record.value())) {
                    continue;
                }

                block.add(record.value());
                System.out.println("Recevied message: (" + record.key() + ", " + record.value() + ") at offset " + record.offset());
            }
        }
    }

    public BlockBuffer getBlock() {
        return block;
    }
}
