package indiv.dev.grad.hit.pro.controller.rest;

import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/module")
public class MdlPfmRestController {
    @Autowired
    private ModulePerformanceService modulePerformanceService;

    @RequestMapping(value = "/applications", method = RequestMethod.GET)
    @ResponseBody
    public List<String> getApps() {
        return modulePerformanceService.getAllApplications();
    }

    @RequestMapping(value = "/applications/{id}", method = RequestMethod.GET)
    @ResponseBody
    public String getApplicationsById(@PathVariable("id") Integer appId) {
        return modulePerformanceService.getApplicationById(appId);
    }
}
