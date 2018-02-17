package indiv.dev.grad.hit.pro.users.service.test;

import indiv.dev.grad.hit.pro.constant.EncryptConstant;
import indiv.dev.grad.hit.pro.model.UserModel;
import indiv.dev.grad.hit.pro.service.impl.UserServiceImpl;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 5:32
 */
public class TestGenerateToken {
    public static void main(String[] args) {
        UserModel userModel = new UserModel();
        userModel.setName("gu");
        userModel.setPicture("http://www.baidu.com");

        UserServiceImpl userService = new UserServiceImpl();
        String token = userService.generateToken(EncryptConstant.MD5, userModel);
        System.out.println(token);
    }

}
