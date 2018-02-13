package indiv.dev.grad.hit.pro.vo;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-01-31 17:00
 * 当日线上服务性能查询 restful映射类
 */
public class EffectiveQuery {
    private String start;
    private String end;
    private String appName;

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }
}
