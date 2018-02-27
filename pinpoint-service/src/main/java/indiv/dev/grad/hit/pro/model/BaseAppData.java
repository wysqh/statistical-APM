package indiv.dev.grad.hit.pro.model;

import indiv.dev.grad.hit.pro.pojo.AppUriEffective;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-26 11:40
 */
public class BaseAppData implements Serializable {
    String uri;
    Integer requests;
    Float avgResTime;
    Float maxResTime;
    Float minResTime;
    Integer slowReq;
    List<MetaTrace> slows;
    List<MetaTrace> exceptions;

    public BaseAppData() {

    }

    public BaseAppData(AppUriEffective appUriEffective) {
        this.uri = appUriEffective.getUri();
        this.requests = appUriEffective.getAmount();
        this.avgResTime = appUriEffective.getAvgRsp();
        this.maxResTime = appUriEffective.getMaxRsp();
        this.minResTime = appUriEffective.getMinRsp();
        this.slowReq = appUriEffective.getSlowCount();
        this.slows = null;
        this.exceptions = null;
    }

    public BaseAppData(AppUriEffective appUriEffective, List<MetaTrace> slows, List<MetaTrace> exceptions) {
        this.uri = appUriEffective.getUri();
        this.requests = appUriEffective.getAmount();
        this.avgResTime = appUriEffective.getAvgRsp();
        this.maxResTime = appUriEffective.getMaxRsp();
        this.minResTime = appUriEffective.getMinRsp();
        this.slowReq = appUriEffective.getSlowCount();
        this.slows = slows;
        this.exceptions = exceptions;
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
