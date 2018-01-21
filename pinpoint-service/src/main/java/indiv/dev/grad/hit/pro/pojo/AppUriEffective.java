package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;
import java.util.Date;

public class AppUriEffective implements Serializable {
    private Integer id;

    private Integer start;

    private String appName;

    private String uri;

    private String ipPort;

    private Integer amount;

    private Float avgRsp;

    private Float maxRsp;

    private Float minRsp;

    private String slow;

    private Integer slowCount;

    private String exception;

    private Date updateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStart() {
        return start;
    }

    public void setStart(Integer start) {
        this.start = start;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName == null ? null : appName.trim();
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri == null ? null : uri.trim();
    }

    public String getIpPort() {
        return ipPort;
    }

    public void setIpPort(String ipPort) {
        this.ipPort = ipPort == null ? null : ipPort.trim();
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
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

    public String getSlow() {
        return slow;
    }

    public void setSlow(String slow) {
        this.slow = slow == null ? null : slow.trim();
    }

    public Integer getSlowCount() {
        return slowCount;
    }

    public void setSlowCount(Integer slowCount) {
        this.slowCount = slowCount;
    }

    public String getException() {
        return exception;
    }

    public void setException(String exception) {
        this.exception = exception == null ? null : exception.trim();
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}