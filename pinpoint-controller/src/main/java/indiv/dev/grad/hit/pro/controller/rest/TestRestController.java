package indiv.dev.grad.hit.pro.controller.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("exceptions")
public class TestRestController {
    @RequestMapping(value = "e2/{id}", method = {RequestMethod.GET})
    @ResponseBody
    public String testExceptionHandle2(@PathVariable(value = "id") Integer id) {
        List<String> list = Arrays.asList(new String[]{"a", "b", "c", "d"});
        return list.get(id);
    }
}
