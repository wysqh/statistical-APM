package indiv.dev.grad.hit.pro.vo;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 16:00
 */
public class MaxResponseVO {
    public String appName;
    public String uri;
    public Float maxRsp;
    public String linkage;

    public MaxResponseVO() {

    }

    public MaxResponseVO(String appName, String uri, Float maxRsp) {
        this.appName = appName;
        this.uri = uri;
        this.maxRsp = maxRsp;
        this.linkage = null;
    }

    public MaxResponseVO(String appName, String uri, Float maxRsp, String linkage) {
        this.appName = appName;
        this.uri = uri;
        this.maxRsp = maxRsp;
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

    public Float getMaxRsp() {
        return maxRsp;
    }

    public void setMaxRsp(Float maxRsp) {
        this.maxRsp = maxRsp;
    }

    public String getLinkage() {
        return linkage;
    }

    public void setLinkage(String linkage) {
        this.linkage = linkage;
    }

    public static MaxResponseVO doTransform(AppUriEffectiveDaily appUriEffectiveDaily) {
        return new MaxResponseVO(appUriEffectiveDaily.getAppName(),
                appUriEffectiveDaily.getUri(),
                appUriEffectiveDaily.getMaxRsp());
    }
}
