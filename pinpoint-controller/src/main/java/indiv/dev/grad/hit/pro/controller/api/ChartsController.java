package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.model.AllocGraph;
import indiv.dev.grad.hit.pro.model.CpuGraph;
import indiv.dev.grad.hit.pro.model.SingleTask;
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
    public BaseObjectResult<PieEChartsModel> getPieEChartsGraphDataByAttr(@RequestParam(value = "start", required = false)String start,
                                                         @RequestParam(value = "end", required = false)String end) {
        loggger.info("PieRequestParam: " + start + ", " + end);
        BaseObjectResult<PieEChartsModel> baseObjectResult = new BaseObjectResult<PieEChartsModel>();
        if (StringUtils.isEmpty(start) || StringUtils.isEmpty(end)) {
            start = "1970-01-01 00:00";
            end = DateFormatUtils.getCurrentTime();
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

    @RequestMapping(value = "/echart/getMemAlloc", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<AllocGraph> getMemAlloc() {
        BaseObjectResult<AllocGraph> result = new BaseObjectResult<AllocGraph>();
        AllocGraph graph = chartService.getMemAlloc();
        result.setContent(graph, "succuess");
        return result;
    }

    @RequestMapping(value = "/echart/getDisCpuOcc", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<CpuGraph> getDisCpuOcc() {
        BaseObjectResult<CpuGraph> result = new BaseObjectResult<CpuGraph>();
        CpuGraph graph = chartService.getCpuOcc();
        result.setContent(graph, "success");
        return result;
    }

    @RequestMapping(value = "/echart/getSingleJobDistribution", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<SingleTask> getSingleJobDistribution() {
        BaseObjectResult<SingleTask> result = new BaseObjectResult<SingleTask>();
        SingleTask singleTask = chartService.getDisTaskDis();
        result.setContent(singleTask, "success");
        return result;
    }

    @RequestMapping(value = "/echart/getSafePointPara", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<VN<String, String>>> getSafePointPara() {
        BaseObjectResult<List<VN<String, String>>> result = new BaseObjectResult<List<VN<String, String>>>();
        List<VN<String, String>> lists = chartService.getSafePointPara();
        result.setContent(lists, "success");
        return result;
    }
}
