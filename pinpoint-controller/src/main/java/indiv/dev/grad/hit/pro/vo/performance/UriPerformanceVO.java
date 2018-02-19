package indiv.dev.grad.hit.pro.vo.performance;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-14 17:10
 */
public class UriPerformanceVO {
    private String appName;
    private String uri;
    private List<AppUriEffectiveHourly> lists;

    public UriPerformanceVO() {
        lists = new ArrayList<AppUriEffectiveHourly>();
        appName = null;
        uri = null;
    }

    public UriPerformanceVO(String appName, String uri, List<AppUriEffectiveHourly> lists) {
        this.appName = appName;
        this.uri = uri;
        this.lists = lists;
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

    public List<AppUriEffectiveHourly> getLists() {
        return lists;
    }

    public void setLists(List<AppUriEffectiveHourly> lists) {
        this.lists = lists;
    }

    public static UriPerformanceVO doTransform(List<AppUriEffectiveHourly> appUriEffectiveHourlies) {
        UriPerformanceVO uriPerformanceVO = new UriPerformanceVO();
        boolean bFirstAssign = false;
        for (AppUriEffectiveHourly appUriEffectiveHourly : appUriEffectiveHourlies) {
            if (!bFirstAssign) {
                bFirstAssign = true;
                uriPerformanceVO.appName = appUriEffectiveHourly.getAppName();
                uriPerformanceVO.uri = appUriEffectiveHourly.getUri();
            }
            uriPerformanceVO.lists.add(appUriEffectiveHourly);
        }

        return  uriPerformanceVO;
    }
}
