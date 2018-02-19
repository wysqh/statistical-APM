package indiv.dev.grad.hit.pro.vo.performance;

import indiv.dev.grad.hit.pro.pojo.AppUriEffective;

public class PerformanceVO {
    String uri;
    Integer reqInPeriod;
    Float avgRspTime;
    Float maxRspTime;
    Float minRspTime;
    Integer reqOver3s;
    String slowTop10;
    String exceptionTop10;

    public PerformanceVO(String uri, Integer reqInPeriod, Float avgRspTime, Float maxRspTime, Float minRspTime, Integer reqOver3s, String slowTop10, String exceptionTop10) {
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

    public String getSlowTop10() {
        return slowTop10;
    }

    public void setSlowTop10(String slowTop10) {
        this.slowTop10 = slowTop10;
    }

    public String getExceptionTop10() {
        return exceptionTop10;
    }

    public void setExceptionTop10(String exceptionTop10) {
        this.exceptionTop10 = exceptionTop10;
    }

    public static PerformanceVO doTransform(AppUriEffective appUriEffective) {
        return new PerformanceVO(appUriEffective.getUri(), appUriEffective.getAmount(),
                appUriEffective.getAvgRsp(), appUriEffective.getMaxRsp(), appUriEffective.getMinRsp(),
                appUriEffective.getSlowCount(),
                appUriEffective.getSlow(), appUriEffective.getException());
    }
}
