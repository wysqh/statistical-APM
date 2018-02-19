package indiv.dev.grad.hit.pro.controller.rest;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;
import indiv.dev.grad.hit.pro.service.ModuleUriCheckService;
import indiv.dev.grad.hit.pro.util.BaseObjectResult;
import indiv.dev.grad.hit.pro.vo.ApiQuery;
import indiv.dev.grad.hit.pro.vo.performance.UriPerformanceVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 17:09
 */
@Controller
@RequestMapping("/rest")
public class UriPerformanceCheckRestController {
    private final static Logger logger = LoggerFactory.getLogger(UriPerformanceCheckRestController.class);

    @Autowired
    private ModuleUriCheckService moduleUriCheckService;

    @RequestMapping(value = "/uri/params")
    @ResponseBody
    public BaseObjectResult<UriPerformanceVO> getUriPerformanceByQuery(@RequestParam(value = "query") String query) {
        ApiQuery apiQuery = null;
        BaseObjectResult<UriPerformanceVO> baseObjectResult = new BaseObjectResult<UriPerformanceVO>();
        try {
            apiQuery = new GsonBuilder().create().fromJson(query, ApiQuery.class);
        } catch (JsonSyntaxException jse) {
            jse.printStackTrace();
        }
        logger.debug("/uri/params:" + apiQuery.getAppName() + apiQuery.getDay() + apiQuery.getUri());
        List<AppUriEffectiveHourly> appUriEffectiveHourlies =
                moduleUriCheckService.getUriPerformanceByQuery(apiQuery.getAppName(),
                        apiQuery.getDay(), apiQuery.getUri());

        baseObjectResult.setContent(UriPerformanceVO.doTransform(appUriEffectiveHourlies), "fetch data success");
        return baseObjectResult;
    }
}
