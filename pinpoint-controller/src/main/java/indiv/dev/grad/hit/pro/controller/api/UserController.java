package indiv.dev.grad.hit.pro.controller.api;

import com.fasterxml.jackson.databind.ser.Serializers;
import indiv.dev.grad.hit.pro.model.BaseResult;
import indiv.dev.grad.hit.pro.service.UserService;
import indiv.dev.grad.hit.pro.vo.AuthResultVO;
import indiv.dev.grad.hit.pro.vo.UsersVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-17 4:08
 */

/*
  @Todo:
    1: 用户登入时考虑对密码进行不对称加密
    2: 用户ACL控制
 */
@Controller
@RequestMapping("/api")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    /*
        @Func: 测试用户注册返回json数据
     */
    @RequestMapping(value = "/test/login", method = RequestMethod.GET)
    @ResponseBody
    AuthResultVO userLoginTest(@RequestParam("email")String email,
                           @RequestParam("password")String password,
                           @RequestParam(value = "rememberMe", required = false)Boolean rememberMe){
        BaseResult<String> baseResult = userService.login(email, password, rememberMe);
        if (baseResult.isStatus()) {
            return new AuthResultVO(true, baseResult.getData());
        }

        AuthResultVO failVO = new AuthResultVO();
        failVO.setSuccess(false);
        failVO.addErrors(baseResult.getMessage());
        return failVO;
    }

    @RequestMapping(value = "/auth/login", method = RequestMethod.POST)
    @ResponseBody
    AuthResultVO userLogin(@RequestBody UsersVO usersVO){
        logger.info("UserControllerInfo: " + usersVO.getEmail() + "," + usersVO.getPassword() + "," + usersVO.getRememberMe()); // http.body 测试
        BaseResult<String> baseResult = userService.login(usersVO.getEmail(),usersVO.getPassword(), usersVO.getRememberMe());
        if (baseResult.isStatus()) {
            return new AuthResultVO(true, baseResult.getData());
        }

        AuthResultVO failVO = new AuthResultVO();
        failVO.setSuccess(false);
        failVO.addErrors(baseResult.getMessage());
        return failVO;
    }

    @RequestMapping("/auth/request-pass")
    @ResponseBody
    AuthResultVO userRequestPass(@RequestParam(value = "email")String email){
        return  null;
    }

    @RequestMapping("/auth/register")
    @ResponseBody
    AuthResultVO userRegister(@RequestParam(value = "confirmPassword")String confirmPassword,
                              @RequestParam(value = "email")String email,
                              @RequestParam(value = "fullName")String fullName,
                              @RequestParam(value = "password")String password,
                              @RequestParam(value = "terms")boolean terms) {
        return null;
    }

    @RequestMapping("/auth/reset-password")
    @ResponseBody
    AuthResultVO userRestPass(@RequestParam(value = "confirmPassword")String confirmPassword,
                              @RequestParam(value = "password")String password) {
        return null;
    }

    /*
        @Func: 测试用户注销返回Json数据
        @Notice: Get方式一般会出现Token过长被截断的可能性
     */
    @RequestMapping(value = "/test/logout", method = RequestMethod.GET)
    @ResponseBody
    AuthResultVO userLogout(@RequestParam("token")String token) {
        logger.info("LogoutInfo: " + token);
        BaseResult<String> baseResult = userService.logout(token);
        if (baseResult.isStatus()) {
            return new AuthResultVO(true, baseResult.getData());
        }

        AuthResultVO failVO = new AuthResultVO();
        failVO.setSuccess(false);
        failVO.addErrors(baseResult.getMessage());
        return failVO;
    }
}
