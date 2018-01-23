package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;
import java.util.Date;

public class AppUriEffective implements Serializable {
    private Integer id;

    private Integer start;

    private String app_name;

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

    public String getApp_name() {
        return app_name;
    }

    public void setApp_name(String app_name) {
        this.app_name = app_name;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getIpPort() {
        return ipPort;
    }

    public void setIpPort(String ipPort) {
        this.ipPort = ipPort;
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
        this.slow = slow;
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
        this.exception = exception;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}