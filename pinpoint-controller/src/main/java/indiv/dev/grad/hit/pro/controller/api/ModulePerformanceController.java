package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/pinpoint")
public class ModulePerformanceController {
    @Autowired
    private ModulePerformanceService modulePerformanceService;

    @RequestMapping("/getAllApplications")
    @ResponseBody
    List<String> getAllApplications() {
        return modulePerformanceService.getAllApplications();
    }
}
