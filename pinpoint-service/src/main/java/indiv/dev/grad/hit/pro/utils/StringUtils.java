package indiv.dev.grad.hit.pro.utils;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 3:47
 */
public class StringUtils {
    /*
        @params: String string
        @Func: 判断字符串是否为空
     */
    public static boolean isEmpty(String string) {
        return (string == null || string.length() == 0);
    }

    /*
        @params: String str
        @Func: 字符串转换成Byte数组
     */
    public static byte[] string2byte(String str) {
        if (isEmpty(str)) {
            return null;
        }

        byte[] byteArray = str.getBytes();
        return byteArray;
    }

    /*
        @params: String str
        @Func: 字符串倒序
     */
    public static String reverse(final String str) {
       return new StringBuilder(str).reverse().toString();
    }
}
