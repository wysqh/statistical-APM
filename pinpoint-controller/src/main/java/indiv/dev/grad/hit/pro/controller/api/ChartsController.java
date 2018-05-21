package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.model.chart.BarEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.PieEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.VN;
import indiv.dev.grad.hit.pro.service.ChartService;
import indiv.dev.grad.hit.pro.util.BaseObjectResult;
import indiv.dev.grad.hit.pro.util.DateFormatUtils;
import indiv.dev.grad.hit.pro.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:46
 */
@Controller
@RequestMapping("/api")
public class ChartsController {
    private static final Logger loggger = LoggerFactory.getLogger(ChartsController.class);

    @Autowired
    private ChartService chartService;

    /*
        @Func: 请求EChart 饼状图数据
     */
    @RequestMapping(value = "/echart/pie", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<PieEChartsModel> getPieEChartsGraphDataByAttr(@RequestParam("start")String start,
                                                         @RequestParam("end")String end) {
        loggger.info("PieRequestParam: " + start + ", " + end);
        BaseObjectResult<PieEChartsModel> baseObjectResult = new BaseObjectResult<PieEChartsModel>();
        if (StringUtils.isEmpty(start) || StringUtils.isEmpty(end)) {
            baseObjectResult.setFailReason(null, "Provided Date of either start or " +
                    "end is empty");
            return baseObjectResult;
        }
        String format =  "yyyy-MM-dd HH:mm";
        PieEChartsModel model = chartService.getEPieDataByCondition(DateFormatUtils.string2date(format, start),
                DateFormatUtils.string2date(format, end));
        baseObjectResult.setContent(model, "success");
        return baseObjectResult;
    }

    @RequestMapping(value = "/echart/bar", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<BarEChartsModel> getBarEchartsLatest() {
        BaseObjectResult<BarEChartsModel> baseObjectResult = new BaseObjectResult<BarEChartsModel>();
        BarEChartsModel barEChartsModel = chartService.getEBarDataInHafHour();
        baseObjectResult.setContent(barEChartsModel, "success");
        return baseObjectResult;
    }

    @RequestMapping(value = "/echart/getGlobalData", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<VN<String, Integer>>> getGlobalData() {
        BaseObjectResult<List<VN<String, Integer>>> result = new BaseObjectResult<List<VN<String, Integer>>>();
        List<VN<String, Integer>> lists = chartService.getGlobalData();
        result.setContent(lists, "success");
        return result;
    }

    @RequestMapping(value = "/echart/getCpuOc", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<VN<Double, Double>>> getCpuOc() {
        BaseObjectResult<List<VN<Double, Double>>> result = new BaseObjectResult<List<VN<Double, Double>>>();
        List<VN<Double, Double>> lists = chartService.getCpuOccupation();
        result.setContent(lists, "success");
        return result;
    }
}
