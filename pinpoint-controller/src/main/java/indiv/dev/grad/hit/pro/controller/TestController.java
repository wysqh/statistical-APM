package indiv.dev.grad.hit.pro.controller;

import indiv.dev.grad.hit.pro.exceptions.TestException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {
    /**
     * 不需要登陆的url的token值
     */
    String token = "69d2f1f6585054af2b6d4ae081cadf76";

    @RequestMapping(value = "/admin")
    @ResponseBody
    public String testSpring() {
        return "Hello, SpringMVC";
    }

    @RequestMapping(value = "/exceptions")
    @ResponseBody
    public String testExceptions() {
        throw new TestException();
    }

    @RequestMapping(value = "/testToken")
    @ResponseBody
    public String testString(String token) {
        if (this.token != token) {
            return "error";
        }

        return "success";
    }
}