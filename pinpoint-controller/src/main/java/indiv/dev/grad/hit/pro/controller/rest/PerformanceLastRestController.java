package indiv.dev.grad.hit.pro.controller.rest;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;
import indiv.dev.grad.hit.pro.service.ModuleLastPerformanceService;
import indiv.dev.grad.hit.pro.vo.AverageResponseVO;
import indiv.dev.grad.hit.pro.vo.MaxResponseVO;
import indiv.dev.grad.hit.pro.vo.RequestVO;
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
    public List<AverageResponseVO> getAverageResponse(@PathVariable(value = "period") Integer period){
        List<AppUriEffectiveDaily> appUriEffectiveDailyList =
                moduleLastPerformanceService.getAverageResponseDaily(period);
        List<AverageResponseVO> averageResponseVOList = null;
        if (appUriEffectiveDailyList == null || appUriEffectiveDailyList.isEmpty()) {
            logger.info("In avgRsp periodId: " +  period);
        } else {
            averageResponseVOList = new ArrayList<AverageResponseVO>();
            for (AppUriEffectiveDaily appUriEffectiveDaily : appUriEffectiveDailyList) {
                averageResponseVOList.add(AverageResponseVO.doTransform(appUriEffectiveDaily));
            }
        }
        return averageResponseVOList;
    }

    @RequestMapping(value = "/statistics/maxRsp", method = RequestMethod.GET)
    @ResponseBody
    public List<MaxResponseVO> getMaxResponse() {
        return null;
    }

    @RequestMapping(value = "/statistics/request", method = RequestMethod.GET)
    @ResponseBody
    public List<RequestVO> getAllRequests() {
        return null;
    }
}
