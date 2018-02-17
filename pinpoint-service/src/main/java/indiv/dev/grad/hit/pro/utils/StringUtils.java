package indiv.dev.grad.hit.pro.utils;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 3:47
 */
public class StringUtils {
    public static boolean isEmpty(String string) {
        return (string == null || string.length() == 0);
    }

    public static byte[] string2byte(String str) {
        if (isEmpty(str)) {
            return null;
        }

        byte[] byteArray = str.getBytes();
        return byteArray;
    }
}
