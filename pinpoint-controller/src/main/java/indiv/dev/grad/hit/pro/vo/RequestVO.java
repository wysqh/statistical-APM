package indiv.dev.grad.hit.pro.vo;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 16:01
 */
public class RequestVO {
    public String appName;
    public String uri;
    public Integer requests;
    public String linkage;

    public RequestVO() {

    }

    public RequestVO(String appName, String uri, Integer requests) {
        this.appName = appName;
        this.uri = uri;
        this.requests = requests;
        this.linkage = null;
    }

    public RequestVO(String appName, String uri, Integer requests, String linkage) {
        this.appName = appName;
        this.uri = uri;
        this.requests = requests;
        this.linkage = linkage;
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

    public Integer getRequests() {
        return requests;
    }

    public void setRequests(Integer requests) {
        this.requests = requests;
    }

    public String getLinkage() {
        return linkage;
    }

    public void setLinkage(String linkage) {
        this.linkage = linkage;
    }

    public static RequestVO doTransform(AppUriEffectiveDaily appUriEffectiveDaily) {
        return new RequestVO(appUriEffectiveDaily.getAppName(),
                appUriEffectiveDaily.getUri(),
                appUriEffectiveDaily.getAmount());
    }
}
