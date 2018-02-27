package indiv.dev.grad.hit.pro.vo.performance;

import indiv.dev.grad.hit.pro.model.BaseAppData;
import indiv.dev.grad.hit.pro.model.MetaTrace;
import indiv.dev.grad.hit.pro.model.chart.VN;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;

import java.util.ArrayList;
import java.util.List;

public class PerformanceVO {
    private String uri;
    private Integer reqInPeriod;
    private Float avgRspTime;
    private Float maxRspTime;
    private Float minRspTime;
    private Integer reqOver3s;
    private List<VN<String, String>> slowTop10;
    private List<VN<String, String>> exceptionTop10;

    private static final String URL = "http://km.int.nuomi.com/index.html#/transactionDetail/";

    public PerformanceVO() {

    }

    public PerformanceVO(String uri, Integer reqInPeriod, Float avgRspTime, Float maxRspTime, Float minRspTime, Integer reqOver3s, List<VN<String, String>> slowTop10, List<VN<String, String>> exceptionTop10) {
        this.uri = uri;
        this.reqInPeriod = reqInPeriod;
        this.avgRspTime = avgRspTime;
        this.maxRspTime = maxRspTime;
        this.minRspTime = minRspTime;
        this.reqOver3s = reqOver3s;
        this.slowTop10 = slowTop10;
        this.exceptionTop10 = exceptionTop10;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public Integer getReqInPeriod() {
        return reqInPeriod;
    }

    public void setReqInPeriod(Integer reqInPeriod) {
        this.reqInPeriod = reqInPeriod;
    }

    public Float getAvgRspTime() {
        return avgRspTime;
    }

    public void setAvgRspTime(Float avgRspTime) {
        this.avgRspTime = avgRspTime;
    }

    public Float getMaxRspTime() {
        return maxRspTime;
    }

    public void setMaxRspTime(Float maxRspTime) {
        this.maxRspTime = maxRspTime;
    }

    public Float getMinRspTime() {
        return minRspTime;
    }

    public void setMinRspTime(Float minRspTime) {
        this.minRspTime = minRspTime;
    }

    public Integer getReqOver3s() {
        return reqOver3s;
    }

    public void setReqOver3s(Integer reqOver3s) {
        this.reqOver3s = reqOver3s;
    }

    public List<VN<String, String>> getSlowTop10() {
        return slowTop10;
    }

    public void setSlowTop10(List<VN<String, String>> slowTop10) {
        this.slowTop10 = slowTop10;
    }

    public List<VN<String, String>> getExceptionTop10() {
        return exceptionTop10;
    }

    public void setExceptionTop10(List<VN<String, String>> exceptionTop10) {
        this.exceptionTop10 = exceptionTop10;
    }

    /*
        @Warns: Aborted
      */
    public static PerformanceVO doTransform(AppUriEffective appUriEffective) {
        return new PerformanceVO();
    }

    // @todo: 补充VO
    public static PerformanceVO doTransform(BaseAppData baseData) {
        PerformanceVO performanceVO = new PerformanceVO();
        performanceVO.setUri(baseData.getUri());
        performanceVO.setReqInPeriod(baseData.getRequests());
        performanceVO.setAvgRspTime(baseData.getAvgResTime());
        performanceVO.setMaxRspTime(baseData.getMaxResTime());
        performanceVO.setMinRspTime(baseData.getMinResTime());
        performanceVO.setReqOver3s(baseData.getSlowReq());
        performanceVO.setSlowTop10(slowTransfer(baseData));
        performanceVO.setExceptionTop10(exceptionsTransfer(baseData));

        return performanceVO;
    }

    private static String htmlTransfer(String index, String traceId, String collectorTime,  String str) {
        return "<div><a" + " href=" + "\"" + URL + traceId + collectorTime + "\"" + " >" + index + "、" + str + "</a></div>";
    }

    private static List<VN<String, String>> slowTransfer(BaseAppData baseData) {
        List<VN<String, String>> kvs = new ArrayList<VN<String, String>>();
        if (baseData.getSlows() == null) {
            return null;
        }

        List<MetaTrace> slows = baseData.getSlows();
        for (int i = 0; i< slows.size(); ++i) {
            kvs.add(new VN<String, String>(URL + slows.get(i).getTraceId() + "/" + slows.get(i).getCollectorAcceptTime(),
                    "" + i + "、"  + slows.get(i).getElapsed()));
        }
        return kvs;
    }

    private static List<VN<String, String>> exceptionsTransfer(BaseAppData baseData) {
        List<VN<String, String>> kvs = new ArrayList<VN<String, String>>();
        if (baseData.getExceptions() == null) {
            return null;
        }

        List<MetaTrace> exceptions = baseData.getExceptions();
        for (int i = 0; i< exceptions.size(); ++i) {
            kvs.add(new VN<String, String>(URL + exceptions.get(i).getTraceId() + "/" + exceptions.get(i).getCollectorAcceptTime(),
                    "" + i + "、"  + exceptions.get(i).getElapsed()));
        }
        return kvs;
    }
}
