package indiv.dev.grad.hit.pro.controller.rest;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import indiv.dev.grad.hit.pro.exceptions.NoContentException;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.util.DateFormatUtils;
import indiv.dev.grad.hit.pro.vo.EffectiveQuery;
import indiv.dev.grad.hit.pro.vo.PerformanceVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public String getApplicationsById(@PathVariable(value = "id") Integer appId) {
        return modulePerformanceService.getApplicationById(appId);
    }

    @RequestMapping(value = "/applications/name/{module}", method = RequestMethod.GET)
    @ResponseBody
    public List<String> getSimilarWordsByName(@PathVariable(value = "module")String module) {
        return modulePerformanceService.getAppsNameBySimilar(module);
    }

    @RequestMapping(value = "/effectives", method = RequestMethod.GET)
    @ResponseBody
    public List<PerformanceVO> getAllEffectives() {
        List<PerformanceVO> performances = new ArrayList<PerformanceVO>();
        for (AppUriEffective appUriEffective: modulePerformanceService.getAppUriEffectives()) {
            performances.add(PerformanceVO.doTransform(appUriEffective));
        }

        return performances;
    }

    @RequestMapping(value = "/effectives/{id}", method = RequestMethod.GET)
    @ResponseBody
    public AppUriEffective getEffectiveById(@PathVariable(value = "id") Integer id) {
        AppUriEffective appUriEffective = modulePerformanceService.getAppUriEffectiveById(id);
        if (appUriEffective == null) {
            throw new NoContentException();
        }
        return appUriEffective;
    }

    @RequestMapping(value = "/effectives/params")
    @ResponseBody
    public List<PerformanceVO> getEffectiveByQuery(@RequestParam String query) {
        EffectiveQuery effectiveQuery = null;
        try {
            effectiveQuery = new GsonBuilder().create().fromJson(
                    query, EffectiveQuery.class
            );
        } catch (JsonSyntaxException jse) {
            jse.printStackTrace();
        }

        String format = "yyyy-MM-dd HH:mm";
        String start = effectiveQuery.getStart();
        String end = effectiveQuery.getEnd();
        List<PerformanceVO> performanceList = new ArrayList<PerformanceVO>();
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
            performanceList.add(PerformanceVO.doTransform(appUriEffective));
        }

        return performanceList;
    }

}
