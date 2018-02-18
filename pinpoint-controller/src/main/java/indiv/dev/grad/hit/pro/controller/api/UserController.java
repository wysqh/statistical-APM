package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.model.BaseResult;
import indiv.dev.grad.hit.pro.service.UserService;
import indiv.dev.grad.hit.pro.vo.AuthResultVO;
import indiv.dev.grad.hit.pro.vo.UsersVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-17 4:08
 */
@Controller
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    /*
        @Func: 测试返回数据
     */
    @RequestMapping(value = "/test/login", method = RequestMethod.GET)
    @ResponseBody
    AuthResultVO userLogin(@RequestParam("email")String email,
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
    AuthResultVO userLogin(@ModelAttribute("user")UsersVO usersVO){
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

    @RequestMapping("/auth/logout")
    @ResponseBody
    AuthResultVO userLogout() {
        return null;
    }
}
