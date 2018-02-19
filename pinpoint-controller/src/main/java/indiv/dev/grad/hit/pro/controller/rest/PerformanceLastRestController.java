package indiv.dev.grad.hit.pro.controller.rest;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;
import indiv.dev.grad.hit.pro.service.ModuleLastPerformanceService;
import indiv.dev.grad.hit.pro.util.BaseObjectResult;
import indiv.dev.grad.hit.pro.vo.performance.AverageResponseVO;
import indiv.dev.grad.hit.pro.vo.performance.MaxResponseVO;
import indiv.dev.grad.hit.pro.vo.performance.RequestVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 15:14
 */

@Controller
@RequestMapping("/rest")
public class PerformanceLastRestController {
    private static final Logger logger = LoggerFactory.getLogger(PerformanceLastRestController.class);

    @Autowired
    private ModuleLastPerformanceService moduleLastPerformanceService;

    @RequestMapping(value = "/statistics/avgRsp/{period}", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<AverageResponseVO>> getAverageResponse(@PathVariable(value = "period") Integer period){
        List<AppUriEffectiveDaily> appUriEffectiveDailyList =
                moduleLastPerformanceService.getAverageResponseDaily(period);
        List<AverageResponseVO> averageResponseVOList = null;
        if (appUriEffectiveDailyList == null || appUriEffectiveDailyList.isEmpty()) {
            logger.info("In avgRsp periodId: " +  period);;
        } else {
            averageResponseVOList = new ArrayList<AverageResponseVO>();
            for (AppUriEffectiveDaily appUriEffectiveDaily : appUriEffectiveDailyList) {
                averageResponseVOList.add(AverageResponseVO.doTransform(appUriEffectiveDaily));
            }
        }
        return new BaseObjectResult<List<AverageResponseVO>>("success", true,
                averageResponseVOList);
    }

    @RequestMapping(value = "/statistics/maxRsp/{period}", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<MaxResponseVO>> getMaxResponse(@PathVariable(value = "period") Integer period) {
        List<AppUriEffectiveDaily> appUriEffectiveDailyList =
                moduleLastPerformanceService.getMaxResponseDaily(period);
        List<MaxResponseVO> maxResponseVOList = null;
        if (appUriEffectiveDailyList == null || appUriEffectiveDailyList.isEmpty()) {
            logger.info("In maxRsp periodId: " + period);
        } else {
            maxResponseVOList = new ArrayList<MaxResponseVO>();
            for (AppUriEffectiveDaily appUriEffectiveDaily: appUriEffectiveDailyList) {
                maxResponseVOList.add(MaxResponseVO.doTransform(appUriEffectiveDaily));
            }
        }
        return new BaseObjectResult<List<MaxResponseVO>>("success", true,
                maxResponseVOList);
    }

    @RequestMapping(value = "/statistics/request/{period}", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<RequestVO>> getAllRequests(@PathVariable(value = "period") Integer period) {
        List<AppUriEffectiveDaily> appUriEffectiveDailyList
                = moduleLastPerformanceService.getRequestsDaily(period);
        List<RequestVO> requestVOList = null;
        if (appUriEffectiveDailyList == null || appUriEffectiveDailyList.isEmpty()) {
            logger.info("In Request periodId: " + period);
        } else {
            requestVOList = new ArrayList<RequestVO>();
            for (AppUriEffectiveDaily appUriEffectiveDaily: appUriEffectiveDailyList) {
                requestVOList.add(RequestVO.doTransform(appUriEffectiveDaily));
            }
        }

        return new BaseObjectResult<List<RequestVO>>("success", true,
                requestVOList);
    }
}
