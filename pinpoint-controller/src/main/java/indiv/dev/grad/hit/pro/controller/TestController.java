package indiv.dev.grad.hit.pro.controller;

import indiv.dev.grad.hit.pro.exceptions.TestException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {
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
}