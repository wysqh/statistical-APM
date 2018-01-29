package indiv.dev.grad.hit.pro.controller.rest;

import indiv.dev.grad.hit.pro.exceptions.NoContentException;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.vo.Performance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/api")
public class ApplicationRestController {
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

    @RequestMapping(value = "/effectives", method = RequestMethod.GET)
    @ResponseBody
    public List<Performance> getAllEffectives() {
        List<Performance> performances = new ArrayList<>();
        for (AppUriEffective appUriEffective: modulePerformanceService.getAppUriEffectives()) {
            performances.add(Performance.doTransform(appUriEffective));
        }

        return performances;
    }

    @RequestMapping(value = "/effectives/{id}", method = RequestMethod.GET)
    @ResponseBody
    public AppUriEffective getEffectiveById(@PathVariable("id") Integer id) {
        AppUriEffective appUriEffective = modulePerformanceService.getAppUriEffectiveById(id);
        if (appUriEffective == null) {
            throw new NoContentException();
        }
        return appUriEffective;
    }
}
