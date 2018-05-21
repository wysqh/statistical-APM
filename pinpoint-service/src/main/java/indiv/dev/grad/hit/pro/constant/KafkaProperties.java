package indiv.dev.grad.hit.pro.constant;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-11 14:45
 */
public class KafkaProperties {
    public static final String TOPIC = "nutch";
    public static final String TOPIC2 = "relation";
    public static final String TOPIC3 = "performance";
    public static final String KAFKA_SERVER_ADDRESS = "192.168.174.135";
    public static final int KAFKA_SERVER_PORT = 9092;
    public static final int KAFKA_PRODUCER_BUFFER_SIZE = 64 * 1024;
    public static final int CONNECTION_TIMEOUT = 6000;
    public static final String CLIENT_ID = "statistical-apm";
    public static final String EOF = "^C^D";
    public static final String QUIT = "^C^Dquit";
    private static final String[] topic_list = {TOPIC, TOPIC2, TOPIC3};

    public static boolean contains(String _topic) {
        boolean isContain = false;
        for (String topic: topic_list) {
            if (topic.equals(_topic)) {
                isContain = true;
                break;
            }
        }

        return isContain;
    }
}
