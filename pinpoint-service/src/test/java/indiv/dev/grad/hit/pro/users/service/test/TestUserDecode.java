package indiv.dev.grad.hit.pro.users.service.test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.encrypt.Base64Encrypt;
import indiv.dev.grad.hit.pro.encrypt.BaseEncrypt;
import indiv.dev.grad.hit.pro.exceptions.UnImplementedException;
import indiv.dev.grad.hit.pro.model.UserModel;
import indiv.dev.grad.hit.pro.utils.StringUtils;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-19 1:37
 */
public class TestUserDecode {
    public static String[] splitTokens(String token) {
        if (StringUtils.isEmpty(token)) {
            return null;
        }
        return token.split("[.]");
    }

    public static void main(String[] args) {
        BaseEncrypt baseEncrypt = new Base64Encrypt();
        //解密token获取信息
        String token = "eyJhbGciOiJTSEEtNTEyIiwidHlwIjoiSldUIn0=.eyJuYW1lIjoiZ3V0aWFua2FpIiwicGljdHVyZSI6Ii9hc3NldHMvaW1hZ2VzL2FsYW4ucG5nIiwiZW1haWwiOiJndXRpYW5rYWlAYmFpZHUuY29tIn0=.610a37e094663c9492bbf155d48be78a322e12b3355651fd5365beccdb0bcfb967d9f09fdcf7d8e65236520ed51e051d080d00bd7f408697423a8f33896c100f";
        String[] tokens = splitTokens(token);
        System.out.println(tokens.length);
        String decryptToken = null;
        try {
            decryptToken = baseEncrypt.doDecode(tokens[1]);
        } catch (UnImplementedException e) {
            e.printStackTrace();
        }

        Gson gson = new GsonBuilder().create();
        UserModel userModel = gson.fromJson(decryptToken, UserModel.class);
        System.out.println(userModel.getEmail());
        System.out.println(userModel.getName());
        System.out.println(userModel.getPicture());
    }
}
