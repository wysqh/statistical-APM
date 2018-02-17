package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.model.UserModel;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 3:59
 */
public interface UserService {
    String getUserTokenByEmail(String email);
    String generateToken(String encryptType, UserModel userModel);
    boolean register(String email, String password, String fullName);
}
