package indiv.dev.grad.hit.pro.service.impl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.constant.EncryptConstant;
import indiv.dev.grad.hit.pro.encrypt.Base64Encrypt;
import indiv.dev.grad.hit.pro.encrypt.BaseEncrypt;
import indiv.dev.grad.hit.pro.exceptions.NoSpecifiedEncryptTypeException;
import indiv.dev.grad.hit.pro.mapper.UsersMapper;
import indiv.dev.grad.hit.pro.model.JWT;
import indiv.dev.grad.hit.pro.model.UserModel;
import indiv.dev.grad.hit.pro.service.UserService;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.JsonUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.Random;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 3:59
 */
public class UserServiceImpl implements UserService {
    public String getUserTokenByEmail(String email) {
        SqlSession session = DbConnUtils.getSession().openSession();
        String token = "";
        try {
            UsersMapper usersMapper = session.getMapper(UsersMapper.class);
            token = usersMapper.selectTokenByEmail(email);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return token;
    }

    public String generateToken(String encryptType, UserModel userModel) {
        BaseEncrypt baseEncrypt = new Base64Encrypt();

        JWT jwt = new JWT();
        jwt.setAlg(encryptType);
        jwt.setTyp("JWT");

        String jwtJson = JsonUtils.object2json(jwt);
        String firstFormat = baseEncrypt.doEncrypt(jwtJson);

        String userInfoJson = JsonUtils.object2json(userModel);
        String secondFormat = baseEncrypt.doEncrypt(userInfoJson);

        String thirdFormat = null;
        try {
            Integer secret = new Random().nextInt(10);
            String combineStr = firstFormat + secondFormat + secret;
            thirdFormat = baseEncrypt.encryptByType(jwt.getAlg(), combineStr);
        } catch (NoSpecifiedEncryptTypeException nsete) {
            nsete.printStackTrace();
        }

        String token = firstFormat + "." + secondFormat + "." + thirdFormat;
        return token;
    }

    public boolean register(String email, String password, String fullName) {
        return false;
    }
}
