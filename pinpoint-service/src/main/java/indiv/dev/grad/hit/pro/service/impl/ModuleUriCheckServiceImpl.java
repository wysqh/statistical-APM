package indiv.dev.grad.hit.pro.service.impl;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveHourlyMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;
import indiv.dev.grad.hit.pro.service.ModuleUriCheckService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.*;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 17:17
 */
public class ModuleUriCheckServiceImpl implements ModuleUriCheckService{
    public List<AppUriEffectiveHourly> getUriPerformanceByQuery(String appName, String day, String uri) {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffectiveHourly> appUriEffectiveHourlyList = null;
        try {
            Integer iDay = Integer.parseInt(day);
            AppUriEffectiveHourlyMapper appUriEffectiveHourlyMapper
                    = session.getMapper(AppUriEffectiveHourlyMapper.class);
            appUriEffectiveHourlyList =
                    appUriEffectiveHourlyMapper.selectUriPerformanceByQuery(appName, iDay, uri);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        List<AppUriEffectiveHourly> list = performanceOrderByHour(appName, day, uri, appUriEffectiveHourlyList);

        return list;
    }

    public List<AppUriEffectiveHourly> performanceOrderByHour(String appName, String day, String uri, List<AppUriEffectiveHourly> appUriEffectiveHourlies) {
        String format = "yyyyMMddHH";
        List<AppUriEffectiveHourly> appUriEffectiveHourlyList = new ArrayList<AppUriEffectiveHourly>();
        //日期转换
        Date date = DateFormatUtils.getStartTimeOfDay(new Date().getTime(), "");
        String startOfDay = DateFormatUtils.format(date, format);
        Integer iStartOfDay = null;
        try {
            iStartOfDay = Integer.parseInt(startOfDay);
        } catch (NumberFormatException nfe) {
            nfe.printStackTrace();
        }
        //按时序排序
        Integer iStartOfHour = iStartOfDay;
        for (Integer indicator = 0; indicator < 24; indicator++) {
            boolean bFound = true;
            iStartOfHour = iStartOfDay + indicator;
            for (AppUriEffectiveHourly appUriEffectiveHourly: appUriEffectiveHourlies) {
                if (appUriEffectiveHourly.getHour().equals(iStartOfHour)) {
                    bFound = false;
                    break;
                }
            }
            if (bFound) {
                AppUriEffectiveHourly appUriEffectiveHourly = new AppUriEffectiveHourly();
                appUriEffectiveHourly.setId(-1);
                appUriEffectiveHourly.setDay(Integer.parseInt(day));
                appUriEffectiveHourly.setHour(iStartOfHour);
                appUriEffectiveHourly.setAppName(appName);
                appUriEffectiveHourly.setUri(uri);
                appUriEffectiveHourly.setAgent(null);
                appUriEffectiveHourly.setAmount(0);
                appUriEffectiveHourly.setAvgRsp(0f);
                appUriEffectiveHourly.setMaxRsp(0f);
                appUriEffectiveHourly.setMinRsp(0f);
                appUriEffectiveHourly.setSlow("");
                appUriEffectiveHourly.setSlowCount(0);
                appUriEffectiveHourly.setException("");
                appUriEffectiveHourly.setUpdateTime(new Date());

                appUriEffectiveHourlyList.add(appUriEffectiveHourly);
            }
        }

        //添加余下内容
        for (AppUriEffectiveHourly appUriEffectiveHourly: appUriEffectiveHourlies) {
            appUriEffectiveHourlyList.add(appUriEffectiveHourly);
        }
        //时序排序(升序)
        Collections.sort(appUriEffectiveHourlyList, new Comparator<AppUriEffectiveHourly>() {
            public int compare(AppUriEffectiveHourly o1, AppUriEffectiveHourly o2) {
                return o1.getHour().compareTo(o2.getHour());
            }
        });
        return appUriEffectiveHourlyList;
    }
}
