package indiv.dev.grad.hit.pro.vo.performance;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 15:54
 */
public class AverageResponseVO {
    public String appName;
    public String uri;
    public Float avgRsp;
    public String linkage;

    public AverageResponseVO() {

    }

    public AverageResponseVO(String appName, String uri, Float avgRsp) {
        this.appName = appName;
        this.uri = uri;
        this.avgRsp = avgRsp;
        this.linkage = null;
    }

    public AverageResponseVO(String appName, String uri, Float avgRsp, String linkage) {
        this.appName = appName;
        this.uri = uri;
        this.avgRsp = avgRsp;
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

    public Float getAvgRsp() {
        return avgRsp;
    }

    public void setAvgRsp(Float avgRsp) {
        this.avgRsp = avgRsp;
    }

    public String getLinkage() {
        return linkage;
    }

    public void setLinkage(String linkage) {
        this.linkage = linkage;
    }

    public static AverageResponseVO doTransform(AppUriEffectiveDaily appUriEffectiveDaily) {
        return new AverageResponseVO(appUriEffectiveDaily.getAppName(),
                appUriEffectiveDaily.getUri(),
                appUriEffectiveDaily.getAvgRsp());
    }
}
