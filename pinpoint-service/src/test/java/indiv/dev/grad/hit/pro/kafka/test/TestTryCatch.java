package indiv.dev.grad.hit.pro.kafka.test;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-12 18:38
 */
public class TestTryCatch {
    public static void main(String[] args) {
        int i = 1;
        TestTryCatch t = new TestTryCatch();

        try {
            System.out.println(t.test());
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(3);
    }

    public int test() throws Exception{
        return 2;
    }
}
