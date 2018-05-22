package indiv.dev.grad.hit.pro.vo.performance;

import indiv.dev.grad.hit.pro.model.BaseAppData;
import indiv.dev.grad.hit.pro.model.BaseInterfaceData;
import indiv.dev.grad.hit.pro.model.MetaTrace;
import indiv.dev.grad.hit.pro.model.chart.VN;
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
    private List<BaseInterfaceData> lists;

    private static final String URL = "http://km.int.nuomi.com/index.html#/transactionDetail/";

    public UriPerformanceVO() {
        lists = new ArrayList<BaseInterfaceData>();
        appName = null;
        uri = null;
    }

    public UriPerformanceVO(String appName, String uri, List<BaseInterfaceData> lists) {
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

    public List<BaseInterfaceData> getLists() {
        return lists;
    }

    public void setLists(List<BaseInterfaceData> lists) {
        this.lists = lists;
    }

    public static UriPerformanceVO doTransform(List<BaseInterfaceData> baseInterfaceDataList) {
        UriPerformanceVO uriPerformanceVO = new UriPerformanceVO();
        boolean bFirstAssign = false;
        for (BaseInterfaceData baseInterfaceData : baseInterfaceDataList) {
            if (!bFirstAssign) {
                bFirstAssign = true;
                uriPerformanceVO.appName = baseInterfaceData.getAppName();
                uriPerformanceVO.uri = baseInterfaceData.getUri();
            }
            baseInterfaceData.setSlowTop10(slowTransfer(baseInterfaceData));
            baseInterfaceData.setExceptionTop10(exceptionsTransfer(baseInterfaceData));
            uriPerformanceVO.lists.add(baseInterfaceData);
        }

        return  uriPerformanceVO;
    }

    private static List<VN<String, String>> slowTransfer(BaseInterfaceData baseData) {
        List<VN<String, String>> kvs = new ArrayList<VN<String, String>>();
        if (baseData.getSlows() == null) {
            return null;
        }

        List<MetaTrace> slows = baseData.getSlows();
        int size = (slows.size() >= 10 ? 10 : slows.size());
        for (int i = 0; i < size; ++i) {
            kvs.add(new VN<String, String>(URL + slows.get(i).getTraceId() + "/" + slows.get(i).getCollectorAcceptTime(),
                    "" + i + "、"  + slows.get(i).getElapsed()));
        }
        return kvs;
    }

    private static List<VN<String, String>> exceptionsTransfer(BaseInterfaceData baseData) {
        List<VN<String, String>> kvs = new ArrayList<VN<String, String>>();
        if (baseData.getExceptions() == null) {
            return null;
        }

        List<MetaTrace> exceptions = baseData.getExceptions();
        int size = (exceptions.size() >= 10 ? 10 : exceptions.size());
        for (int i = 0; i < size; ++i) {
            kvs.add(new VN<String, String>(URL + exceptions.get(i).getTraceId() + "/" + exceptions.get(i).getCollectorAcceptTime(),
                    "" + i + "、"  + exceptions.get(i).getElapsed()));
        }
        return kvs;
    }
}
