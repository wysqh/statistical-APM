package indiv.dev.grad.hit.pro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
    @RequestMapping(value = "/admin")
    @ResponseBody
    public String testSpring() {
        return "Hello, SpringMVC";
    }
}