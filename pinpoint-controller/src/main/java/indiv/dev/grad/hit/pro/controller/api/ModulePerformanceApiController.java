package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.VO.PerformanceStatistics;
import indiv.dev.grad.hit.pro.serializable.ExceptionInfo;
import indiv.dev.grad.hit.pro.serializable.SlowInfo;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/pinpoint")
public class ModulePerformanceApiController {
    @Autowired
    private ModulePerformanceService modulePerformanceService;

    @RequestMapping("/getAllApplications")
    @ResponseBody
    List<String> getAllApplications() {
        return modulePerformanceService.getAllApplications();
    }

    @RequestMapping("/getPerformanceByAppName")
    @ResponseBody
    List<PerformanceStatistics> getPerformanceByAppName(@RequestParam(value="appName")String appName) {
        return modulePerformanceService.getPerformanceStatisByAppName(appName);
    }

    @RequestMapping("/getApplicationSlowCountByName")
    @ResponseBody
    Map<String, SlowInfo> getAllApplicationSlowCountByName(@RequestParam(value = "appName")String appName) {
        return modulePerformanceService.getApplicationSlowCountByName(appName);
    }

    @RequestMapping("/getApplicationExceptionCountByName")
    @ResponseBody
    Map<String, ExceptionInfo> getApplicationSlowCountByName(@RequestParam(value = "appName")String appName) {
        return modulePerformanceService.getApplicationExceptionCountByName(appName);
    }
}
