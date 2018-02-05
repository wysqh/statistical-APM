package indiv.dev.grad.hit.pro.controller.rest;

import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.exceptions.NoContentException;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.util.DateFormatUtils;
import indiv.dev.grad.hit.pro.vo.EffectiveQuery;
import indiv.dev.grad.hit.pro.vo.Performance;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ParseException;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sun.misc.Perf;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/rest")
public class ApplicationRestController {
    private static final Logger logger = LoggerFactory.getLogger(ApplicationRestController.class);

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

    @RequestMapping(value = "/applications/name/{module}")
    @ResponseBody
    public List<String> getSimilarWordsByName(@PathVariable("module")String module) {
        return modulePerformanceService.getAppsNameBySimilar(module);
    }

    @RequestMapping(value = "/effectives", method = RequestMethod.GET)
    @ResponseBody
    public List<Performance> getAllEffectives() {
        List<Performance> performances = new ArrayList<Performance>();
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

    @RequestMapping(value = "/effectives/params")
    @ResponseBody
    public List<Performance> getEffectiveByQuery(@RequestParam String query) {
        EffectiveQuery effectiveQuery = new GsonBuilder().create().fromJson(
                query, EffectiveQuery.class
        );
        String format = "yyyy-MM-dd HH:mm";
        String start = effectiveQuery.getStart();
        String end = effectiveQuery.getEnd();
        List<Performance> performanceList = new ArrayList<Performance>();
        List<AppUriEffective> appUriEffectiveList = modulePerformanceService.getUriEffectiveByConditions(
                DateFormatUtils.string2date(format, start),
                DateFormatUtils.string2date(format, end),
                effectiveQuery.getAppName()
        );

        if (appUriEffectiveList == null || appUriEffectiveList.isEmpty()) {
            logger.info("List info:" + DateFormatUtils.string2date(format, start).getTime());
            logger.info("List info:" + DateFormatUtils.string2date(format, end).getTime());
        }

        //页面VO转换
        for (AppUriEffective appUriEffective: appUriEffectiveList) {
            performanceList.add(Performance.doTransform(appUriEffective));
        }

        return performanceList;
    }

}
