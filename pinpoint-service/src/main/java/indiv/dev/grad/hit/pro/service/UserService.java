package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.model.BaseResult;
import indiv.dev.grad.hit.pro.model.UserModel;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 3:59
 */
public interface UserService {
    String getUserTokenByEmail(String email);
    String generateToken(String encryptType, UserModel userModel, String email);
    boolean register(String email, String password, String fullName);
    BaseResult<String> login(String email, String password, Boolean rememberMe);
}
