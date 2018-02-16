package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.vo.AuthResultVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-17 4:08
 */
@Controller
@RequestMapping("/api")
public class UserController {
    @RequestMapping("/auth/login")
    @ResponseBody
    AuthResultVO userLogin(@RequestParam(value = "email", required = true)String email,
                           @RequestParam(value = "password", required = true)String password,
                           @RequestParam(value = "rememberMe", required = false)boolean rememberMe){
        return null;
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
