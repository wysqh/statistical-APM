package indiv.dev.grad.hit.pro.vo;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 17:05
 *  接口性能查看 restful映射类
 */
public class ApiQuery {
    String appName;
    String uri;
    String day;     //format: yyyyMMdd

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

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }
}
