package indiv.dev.grad.hit.pro.users.service.test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.constant.EncryptConstant;
import indiv.dev.grad.hit.pro.model.JWT;
import indiv.dev.grad.hit.pro.utils.JsonUtils;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 5:05
 */
public class TestObj2JsonStr {
    public static void main(String[] args) {
        JWT jwt = new JWT();
        jwt.setAlg(EncryptConstant.SHA256);
        jwt.setTyp("JWT");

        Gson gson = new GsonBuilder().create();
        String jsonStr = gson.toJson(jwt);
        System.out.println(jsonStr);

        System.out.println(JsonUtils.object2json(jwt));
    }
}
