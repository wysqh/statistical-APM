package indiv.dev.grad.hit.pro.bootstrap;

import indiv.dev.grad.hit.pro.constant.KafkaProperties;
import indiv.dev.grad.hit.pro.utils.kafka.Consumer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.WeakHashMap;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-12 16:05
 */
public class ConsumerFactory {
    private volatile static Consumer consumer;
    private static final String TOPIC = KafkaProperties.TOPIC;
    private static WeakHashMap<String, Consumer> maps = new WeakHashMap<String, Consumer>();
    private static final Logger logger = LoggerFactory.getLogger(ConsumerFactory.class);

    public static Consumer getConsumer() {
        if (consumer == null) {
            synchronized (ConsumerFactory.class) {
                if (consumer == null) {
                    consumer = new Consumer(TOPIC);
                }
            }
        }

        return consumer;
    }

    public static Consumer getConsumer(String kafkaTopic) {
        if (!KafkaProperties.contains(kafkaTopic)) {
            return null;
        }

        if (maps.get(kafkaTopic) == null) {
            synchronized (ConsumerFactory.class) {
                if (maps.get(kafkaTopic) == null) {
                    maps.put(kafkaTopic, new Consumer(kafkaTopic));
                }
            }
        }

        return maps.get(kafkaTopic);
    }
}
