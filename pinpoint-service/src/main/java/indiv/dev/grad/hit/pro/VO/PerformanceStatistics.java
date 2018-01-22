package indiv.dev.grad.hit.pro.VO;

import java.io.Serializable;
import java.util.Map;

public class PerformanceStatistics implements Serializable {
    String uri;
    Integer requests;
    Float avgResTime;
    Float maxResTime;
    Float minResTime;
    Integer slowReq;
    Map<String, String> slowTop10;
    Map<String, String> exceptionTop10;

    public PerformanceStatistics(String uri, Integer requests, Float avgResTime, Float maxResTime, Float minResTime, Integer slowReq, Map<String, String> slowTop10, Map<String, String> exceptionTop10) {
        this.uri = uri;
        this.requests = requests;
        this.avgResTime = avgResTime;
        this.maxResTime = maxResTime;
        this.minResTime = minResTime;
        this.slowReq = slowReq;
        this.slowTop10 = slowTop10;
        this.exceptionTop10 = exceptionTop10;
    }

    public PerformanceStatistics(String uri, Integer requests, Float avgResTime, Float maxResTime, Float minResTime, Integer slowReq) {
        this.uri = uri;
        this.requests = requests;
        this.avgResTime = avgResTime;
        this.maxResTime = maxResTime;
        this.minResTime = minResTime;
        this.slowReq = slowReq;
        this.slowTop10 = null;
        this.exceptionTop10 = null;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public Integer getRequests() {
        return requests;
    }

    public void setRequests(Integer requests) {
        this.requests = requests;
    }

    public Float getAvgResTime() {
        return avgResTime;
    }

    public void setAvgResTime(Float avgResTime) {
        this.avgResTime = avgResTime;
    }

    public Float getMaxResTime() {
        return maxResTime;
    }

    public void setMaxResTime(Float maxResTime) {
        this.maxResTime = maxResTime;
    }

    public Float getMinResTime() {
        return minResTime;
    }

    public void setMinResTime(Float minResTime) {
        this.minResTime = minResTime;
    }

    public Integer getSlowReq() {
        return slowReq;
    }

    public void setSlowReq(Integer slowReq) {
        this.slowReq = slowReq;
    }

    public Map<String, String> getSlowTop10() {
        return slowTop10;
    }

    public void setSlowTop10(Map<String, String> slowTop10) {
        this.slowTop10 = slowTop10;
    }

    public Map<String, String> getExceptionTop10() {
        return exceptionTop10;
    }

    public void setExceptionTop10(Map<String, String> exceptionTop10) {
        this.exceptionTop10 = exceptionTop10;
    }
}
