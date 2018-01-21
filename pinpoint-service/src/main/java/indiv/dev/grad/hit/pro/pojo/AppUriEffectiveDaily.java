package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;
import java.util.Date;

public class AppUriEffectiveDaily implements Serializable {
    private Integer id;

    private Integer day;

    private String appName;

    private String uri;

    private Integer amount;

    private Float avgRsp;

    private Float maxRsp;

    private Float minRsp;

    private Integer slowCount;

    private Date updateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
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

    public Integer getSlowCount() {
        return slowCount;
    }

    public void setSlowCount(Integer slowCount) {
        this.slowCount = slowCount;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}