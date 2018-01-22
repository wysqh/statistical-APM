package indiv.dev.grad.hit.pro.VO;

import java.util.Map;

public class PerformanceStatistics {
    String uri;
    Integer requests;
    Double avgResTime;
    Double maxResTime;
    Double minResTime;
    Integer slowReq;
    Map<String, String> slowTop10;
    Map<String, String> exceptionTop10;

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

    public Double getAvgResTime() {
        return avgResTime;
    }

    public void setAvgResTime(Double avgResTime) {
        this.avgResTime = avgResTime;
    }

    public Double getMaxResTime() {
        return maxResTime;
    }

    public void setMaxResTime(Double maxResTime) {
        this.maxResTime = maxResTime;
    }

    public Double getMinResTime() {
        return minResTime;
    }

    public void setMinResTime(Double minResTime) {
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
