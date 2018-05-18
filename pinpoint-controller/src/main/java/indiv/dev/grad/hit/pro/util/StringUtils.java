package indiv.dev.grad.hit.pro.util;

import java.io.UnsupportedEncodingException;

public class StringUtils {
    public static boolean isEmpty(String str) {
        return str == null || str.length() == 0;
    }

    public static String zhCompatible(String str) throws UnsupportedEncodingException {
        if (StringUtils.isEmpty(str)) {
            return null;
        }

        return new String(str.getBytes("ISO-8859-1"), "UTF-8");
    }
}
