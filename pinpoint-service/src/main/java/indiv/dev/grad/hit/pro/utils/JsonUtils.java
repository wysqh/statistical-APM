package indiv.dev.grad.hit.pro.utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 5:07
 */
public class JsonUtils {
    public static String object2json(Object o) {
        Gson gson = new GsonBuilder().create();
        return gson.toJson(o);
    }
}
