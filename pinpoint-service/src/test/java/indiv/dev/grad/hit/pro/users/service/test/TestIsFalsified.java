package indiv.dev.grad.hit.pro.users.service.test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import indiv.dev.grad.hit.pro.encrypt.Base64Encrypt;
import indiv.dev.grad.hit.pro.encrypt.BaseEncrypt;
import indiv.dev.grad.hit.pro.mapper.UsersMapper;
import indiv.dev.grad.hit.pro.model.BaseResult;
import indiv.dev.grad.hit.pro.model.JWT;
import indiv.dev.grad.hit.pro.model.UserModel;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-19 2:00
 */
public class TestIsFalsified {
    /*
     @Func: 判断是否被篡改信息
  */
    public boolean isFalsified(String[] tokens, UserModel userModel) {
        JWT jwt = getJWTByToken(tokens[0]);
        String encryptAlg = jwt.getAlg();
        Integer secret = null;
        if (tokens.length != 3) {
           return true;
        }
        SqlSession session = DbConnUtils.getSession().openSession();
        UsersMapper usersMapper = session.getMapper(UsersMapper.class);
        try {
            secret = Integer.parseInt(usersMapper.selectTokenByEmail(userModel.getEmail()));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        String cmpToken = tokens[0] + tokens[1] + secret;
        if (!tokens[2].equals(BaseEncrypt.encryptByType(encryptAlg, cmpToken))) {
            return true;
        }

        return false;
    }

    /*
        @Func: 获取JWT信息
     */
    public JWT getJWTByToken(String token) {
        BaseEncrypt baseEncrypt = new Base64Encrypt();
        Gson gson = new GsonBuilder().create();
        JWT jwt = null;
        try {
            jwt = gson.fromJson(baseEncrypt.doDecode(token), JWT.class);
        } catch (JsonSyntaxException jse) {
            jse.printStackTrace();
        }

        return jwt;
    }

    public static void main(String[] args) {
        String token = "eyJhbGciOiJTSEEtNTEyIiwidHlwIjoiSldUIn0=.eyJuYW1lIjoidGVzdCIsInBpY3R1cmUiOiIifQ==.5e1e980ad6d855e832a061a17d62a42b32c24b4b960cff0e73f6185f7a221482067879b133211de3a49db00883b9ab64d249d17729172bac0f7ab69dc5d9a808";
        TestIsFalsified t = new TestIsFalsified();
        UserModel userModel = new UserModel();
        userModel.setName("gutiankai");
        userModel.setEmail("gutiankai@baidu.com");
        userModel.setPicture("/assets/images/alan.png");
        System.out.println(token.split("[.]")[0]);
        System.out.println(t.isFalsified(token.split("[.]"), userModel));
    }
}
