package indiv.dev.grad.hit.pro.service.impl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import indiv.dev.grad.hit.pro.constant.EncryptConstant;
import indiv.dev.grad.hit.pro.encrypt.Base64Encrypt;
import indiv.dev.grad.hit.pro.encrypt.BaseEncrypt;
import indiv.dev.grad.hit.pro.encrypt.MD5Encrypt;
import indiv.dev.grad.hit.pro.exceptions.NoPassException;
import indiv.dev.grad.hit.pro.exceptions.NoSpecifiedEncryptTypeException;
import indiv.dev.grad.hit.pro.exceptions.ReLogoutException;
import indiv.dev.grad.hit.pro.exceptions.UnImplementedException;
import indiv.dev.grad.hit.pro.mapper.UsersMapper;
import indiv.dev.grad.hit.pro.model.BaseResult;
import indiv.dev.grad.hit.pro.model.JWT;
import indiv.dev.grad.hit.pro.model.UserModel;
import indiv.dev.grad.hit.pro.pojo.Users;
import indiv.dev.grad.hit.pro.service.UserService;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.JsonUtils;
import indiv.dev.grad.hit.pro.utils.StringUtils;
import org.apache.ibatis.jdbc.SQL;
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

    /*
        @Func: 生成token 密钥部分保存至服务端, 返回token
     */
    public String generateToken(String encryptType, UserModel userModel, String email) {
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
            setTokenByEmail("" + secret, email);    //服务端储存token 密钥部分
            String combineStr = firstFormat + secondFormat + secret;
            thirdFormat = BaseEncrypt.encryptByType(jwt.getAlg(), combineStr);
        } catch (NoSpecifiedEncryptTypeException nsete) {
            nsete.printStackTrace();
        }

        String token = firstFormat + "." + secondFormat + "." + thirdFormat;
        return token;
    }

    public String getUserToken(String encryptType, UserModel userModel, String email) {
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
            Integer secret = Integer.parseInt(getUserTokenByEmail(email));
            String combineStr = firstFormat + secondFormat + secret;
            thirdFormat = BaseEncrypt.encryptByType(jwt.getAlg(), combineStr);
        } catch (NoSpecifiedEncryptTypeException nsete) {
            nsete.printStackTrace();
        }

        String token = firstFormat + "." + secondFormat + "." + thirdFormat;
        return token;
    }

    public boolean register(String email, String password, String fullName) {
        return false;
    }

    public BaseResult<String> login(String email, String password, Boolean rememberMe) throws NoPassException {
        BaseResult<String> baseResult = new BaseResult<String>();
        if (StringUtils.isEmpty(email)) {
            baseResult.setFailMessage(email, "Provided Email is Empty");
            return baseResult;
        }

        String token = null;
        String secret = getUserTokenByEmail(email); // 后端存储凭证
        SqlSession session = DbConnUtils.getSession().openSession();
        UsersMapper usersMapper = session.getMapper(UsersMapper.class);
        // 判断是否服务端是否存储用户token
        if (StringUtils.isEmpty(secret)){
            Users user = usersMapper.selectUsersByEmail(email);
            if (user == null) {
                baseResult.setFailMessage(email, "Provided Email Not exist");
                return baseResult;
            }
            UserModel userModel = new UserModel();  // 用户模型
            userModel.setPicture(user.getUserDesc());
            userModel.setName(user.getFullName());
            userModel.setEmail(user.getEmailAddress());

            token = generateToken(EncryptConstant.SHA512, userModel, email);   //生成返回前端token串
        } else {
            Users user = usersMapper.selectUsersByEmail(email);
            UserModel extra = new UserModel(user.getFullName(),user.getUserDesc(), email);
            token = getUserToken(EncryptConstant.SHA512,extra , email); //测试token串
        }
        //登陆验证
        BaseEncrypt baseEncrypt = new MD5Encrypt();
        String transformPass = baseEncrypt.doEncrypt(StringUtils.reverse(password));  // 密码后端转换
        String passMd5 = usersMapper.selectPassMd5ByEmail(email);
        if (StringUtils.isEmpty(passMd5) || StringUtils.isEmpty(password)) {
            throw new NoPassException("No password provided.");
        }
        if (!passMd5.equals(transformPass)) {
            baseResult.setFailMessage(password, "Password Incorrect");
            return baseResult;
        }

        baseResult.setContent(token,"success");
        return baseResult;
    }

    public Integer setTokenByEmail(String token, String email) {
        SqlSession session = DbConnUtils.getSession().openSession();
        Integer rows = null;
        try {
            UsersMapper usersMapper = session.getMapper(UsersMapper.class);
            rows = usersMapper.updateTokenByEmail(token, email);
        } catch (Exception e) {
            session.rollback();
            e.printStackTrace();
        } finally {
            session.commit();
            session.close();
        }

        return rows;
    }

    /*
        @Func: 根据用户传递token凭证判断信息是否篡改, 并实行注销
     */
    public BaseResult<String> logout(String token) {
        BaseResult<String> baseResult = new BaseResult<String>();
        BaseEncrypt baseEncrypt = new Base64Encrypt();
        // 解密token获取信息
        String[] tokens = splitTokens(token);
        String decryptToken = null;
        if (tokens.length != 3) {
            baseResult.setFailMessage(token, "Token is not in JWT Format");
            return baseResult;
        }
        try {
            decryptToken = baseEncrypt.doDecode(tokens[1]);
        } catch (UnImplementedException e) {
            e.printStackTrace();
        }

        Gson gson = new GsonBuilder().create();
        UserModel userModel = gson.fromJson(decryptToken, UserModel.class);
        // 校对信息
        try {
            if (isFalsified(tokens, userModel)) {
                baseResult.setFailMessage(token, "Information is not Accord with that in Server Side ");
                return baseResult;
            }
        } catch (ReLogoutException re) {
            re.printStackTrace();
            baseResult.setFailMessage(null, "Current User has already logged out.");
            return baseResult;
        }

        Integer row = setTokenByEmail("", userModel.getEmail());  // 清空密钥信息
        if (!row.equals(1)) {
            baseResult.setFailMessage("" + row, "Update DB error");
            return baseResult;
        }
        baseResult.setContent(null, "logout success");
        return baseResult;
    }

    /*
        @Func: 分隔token
     */
    public String[] splitTokens(String token) {
        if (StringUtils.isEmpty(token)) {
            return null;
        }
        return token.split("[.]");
    }

    /*
        @Func: 判断是否被篡改信息
     */
    public boolean isFalsified(String[] tokens, UserModel userModel) throws ReLogoutException {
        JWT jwt = getJWTByToken(tokens[0]);
        String encryptAlg = jwt.getAlg();
        String secret = null;

        SqlSession session = DbConnUtils.getSession().openSession();
        UsersMapper usersMapper = session.getMapper(UsersMapper.class);
        secret = usersMapper.selectTokenByEmail(userModel.getEmail());
        if (StringUtils.isEmpty(secret)) {
            throw new ReLogoutException();
        }

        String cmpToken = tokens[0] + tokens[1] + secret;
        if (!tokens[2].equals(BaseEncrypt.encryptByType(encryptAlg, cmpToken))) {
            return true;
        }

        session.close();
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
}
