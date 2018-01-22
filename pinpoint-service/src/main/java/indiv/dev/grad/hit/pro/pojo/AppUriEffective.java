package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;
import java.util.Date;

public class AppUriEffective implements Serializable {
    private Integer id;

    private Integer start;

    private String app_name;

    private String uri;

    private String ip_port;

    private Integer amount;

    private Float avg_rsp;

    private Float max_rsp;

    private Float min_rsp;

    private String slow;

    private Integer slow_count;

    private String exception;

    private Date update_time;

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

    public String getIp_port() {
        return ip_port;
    }

    public void setIp_port(String ip_port) {
        this.ip_port = ip_port;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Float getAvg_rsp() {
        return avg_rsp;
    }

    public void setAvg_rsp(Float avg_rsp) {
        this.avg_rsp = avg_rsp;
    }

    public Float getMax_rsp() {
        return max_rsp;
    }

    public void setMax_rsp(Float max_rsp) {
        this.max_rsp = max_rsp;
    }

    public Float getMin_rsp() {
        return min_rsp;
    }

    public void setMin_rsp(Float min_rsp) {
        this.min_rsp = min_rsp;
    }

    public String getSlow() {
        return slow;
    }

    public void setSlow(String slow) {
        this.slow = slow;
    }

    public Integer getSlow_count() {
        return slow_count;
    }

    public void setSlow_count(Integer slow_count) {
        this.slow_count = slow_count;
    }

    public String getException() {
        return exception;
    }

    public void setException(String exception) {
        this.exception = exception;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }
}