package indiv.dev.grad.hit.pro.model;

import indiv.dev.grad.hit.pro.model.chart.VN;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-27 16:44
 */
public class BaseInterfaceData implements Serializable {
    private String appName;
    private String uri;
    private Integer hour;
    private String agent;
    private Integer request;
    private Float avgRsp;
    private Float maxRsp;
    private Float minRsp;
    private Integer slowCount;
    private List<MetaTrace> slows;
    private List<MetaTrace> exceptions;
    private List<VN<String, String>> slowTop10;
    private List<VN<String, String>> exceptionTop10;

    public BaseInterfaceData() {

    }

    public BaseInterfaceData(AppUriEffectiveHourly appUriEffectiveHourly) {
        this.appName = appUriEffectiveHourly.getAppName();
        this.uri = appUriEffectiveHourly.getUri();
        this.hour = appUriEffectiveHourly.getHour();
        this.agent = appUriEffectiveHourly.getAgent();
        this.request = appUriEffectiveHourly.getAmount();
        this.avgRsp = appUriEffectiveHourly.getAvgRsp();
        this.maxRsp = appUriEffectiveHourly.getMaxRsp();
        this.minRsp = appUriEffectiveHourly.getMinRsp();
        this.slowCount = appUriEffectiveHourly.getSlowCount();
        this.slows = null;
        this.exceptions = null;
        this.slowTop10 = null;
        this.exceptions = null;
    }

    public BaseInterfaceData(String appName, String uri, Integer hour, String agent, Integer request, Float avgRsp, Float maxRsp, Float minRsp, Integer slowCount, List<MetaTrace> slows, List<MetaTrace> exceptions) {
        this.appName = appName;
        this.uri = uri;
        this.hour = hour;
        this.agent = agent;
        this.request = request;
        this.avgRsp = avgRsp;
        this.maxRsp = maxRsp;
        this.minRsp = minRsp;
        this.slowCount = slowCount;
        this.slows = slows;
        this.exceptions = exceptions;
        this.slowTop10 = null;
        this.exceptionTop10 = null;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
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

    public Integer getHour() {
        return hour;
    }

    public void setHour(Integer hour) {
        this.hour = hour;
    }

    public String getAgent() {
        return agent;
    }

    public void setAgent(String agent) {
        this.agent = agent;
    }

    public Integer getRequest() {
        return request;
    }

    public void setRequest(Integer request) {
        this.request = request;
    }

    public Float getAvgRsp() {
        return avgRsp;
    }

    public void setAvgRsp(Float avgRsp) {
        this.avgRsp = avgRsp;
    }

    public Float getMaxRsp() {
        return maxRsp;
    }

    public void setMaxRsp(Float maxRsp) {
        this.maxRsp = maxRsp;
    }

    public Float getMinRsp() {
        return minRsp;
    }

    public void setMinRsp(Float minRsp) {
        this.minRsp = minRsp;
    }

    public Integer getSlowCount() {
        return slowCount;
    }

    public void setSlowCount(Integer slowCount) {
        this.slowCount = slowCount;
    }

    public List<MetaTrace> getSlows() {
        return slows;
    }

    public void setSlows(List<MetaTrace> slows) {
        this.slows = slows;
    }

    public List<MetaTrace> getExceptions() {
        return exceptions;
    }

    public void setExceptions(List<MetaTrace> exceptions) {
        this.exceptions = exceptions;
    }
}
