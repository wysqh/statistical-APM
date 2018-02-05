package indiv.dev.grad.hit.pro.vo;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 16:01
 */
public class RequestVO {
    public String appName;
    public String uri;
    public Long requests;
    public String linkage;

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

    public Long getRequests() {
        return requests;
    }

    public void setRequests(Long requests) {
        this.requests = requests;
    }

    public String getLinkage() {
        return linkage;
    }

    public void setLinkage(String linkage) {
        this.linkage = linkage;
    }
}
