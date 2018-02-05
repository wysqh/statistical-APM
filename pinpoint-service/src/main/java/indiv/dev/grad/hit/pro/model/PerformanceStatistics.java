package indiv.dev.grad.hit.pro.model;

import indiv.dev.grad.hit.pro.serializable.MetaTrace;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class PerformanceStatistics implements Serializable {
    String uri;
    Integer requests;
    Float avgResTime;
    Float maxResTime;
    Float minResTime;
    Integer slowReq;
    Map<String, List<MetaTrace>> slows;
    Map<String, List<MetaTrace>> exceptions;

    public PerformanceStatistics(String uri, Integer requests, Float avgResTime, Float maxResTime, Float minResTime, Integer slowReq, Map<String, List<MetaTrace>> slows, Map<String, List<MetaTrace>> exceptions) {
        this.uri = uri;
        this.requests = requests;
        this.avgResTime = avgResTime;
        this.maxResTime = maxResTime;
        this.minResTime = minResTime;
        this.slowReq = slowReq;
        this.slows = slows;
        this.exceptions = exceptions;
    }

    public PerformanceStatistics(String uri, Integer requests, Float avgResTime, Float maxResTime, Float minResTime, Integer slowReq) {
        this.uri = uri;
        this.requests = requests;
        this.avgResTime = avgResTime;
        this.maxResTime = maxResTime;
        this.minResTime = minResTime;
        this.slowReq = slowReq;
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

    public Map<String, List<MetaTrace>> getSlows() {
        return slows;
    }

    public void setSlows(Map<String, List<MetaTrace>> slows) {
        this.slows = slows;
    }

    public Map<String, List<MetaTrace>> getExceptions() {
        return exceptions;
    }

    public void setExceptions(Map<String, List<MetaTrace>> exceptions) {
        this.exceptions = exceptions;
    }
}
