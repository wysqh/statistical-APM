package indiv.dev.grad.hit.pro.service.impl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveHourlyMapper;
import indiv.dev.grad.hit.pro.model.BaseAppData;
import indiv.dev.grad.hit.pro.model.BaseInterfaceData;
import indiv.dev.grad.hit.pro.model.MetaTrace;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;
import indiv.dev.grad.hit.pro.service.ModuleUriCheckService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.StringUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.*;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 17:17
 */
public class ModuleUriCheckServiceImpl implements ModuleUriCheckService{
    public List<BaseInterfaceData> getUriPerformanceByQuery(String appName, String day, String uri) {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffectiveHourly> appUriEffectiveHourlyList = null;
        List<BaseInterfaceData> baseList = null;
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

        List<AppUriEffectiveHourly> list = null;
        if (appUriEffectiveHourlyList != null) {
            list = performanceOrderByHour(appName, day, uri, appUriEffectiveHourlyList);
            // 慢数据和异常数据Json格式转换
            baseList = hyperLinkTransfer(list);
        }

        return baseList;
    }

    public List<AppUriEffectiveHourly> performanceOrderByHour(String appName, String day, String uri, List<AppUriEffectiveHourly> appUriEffectiveHourlies) {
        String format = "yyyyMMddHH";
        List<AppUriEffectiveHourly> appUriEffectiveHourlyList = new ArrayList<AppUriEffectiveHourly>();
        //日期转换
        Date date = DateFormatUtils.getStartTimeOfDay(
                new Date().getTime() - 24 * 3600 * 1000,
                "");
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

    public List<BaseInterfaceData> hyperLinkTransfer(List<AppUriEffectiveHourly> appUriEffectiveHourlyList) {
        List<BaseInterfaceData> baseList = new ArrayList<BaseInterfaceData>();

        for (AppUriEffectiveHourly appUriEffectiveHourly: appUriEffectiveHourlyList) {
            if (StringUtils.isEmpty(appUriEffectiveHourly.getAgent())) {
                appUriEffectiveHourly.setAgent("-1");
            }
            BaseInterfaceData baseInterfaceData = new BaseInterfaceData(appUriEffectiveHourly);
            baseInterfaceData.setSlows(combineSlow(null, appUriEffectiveHourly));
            baseInterfaceData.setExceptions(combineException(null, appUriEffectiveHourly));

            baseList.add(baseInterfaceData);
        }

        return baseList;
    }

    public List<MetaTrace> combineSlow(BaseAppData baseData, AppUriEffectiveHourly appUriEffectiveHourly) {
        if (baseData == null && appUriEffectiveHourly == null) {
            return null;
        } else if (appUriEffectiveHourly == null) {
            return baseData.getSlows();
        } else if (baseData == null) {
            if (appUriEffectiveHourly.getSlow() == null) {
                return null;
            }
            if ("[]".equals(appUriEffectiveHourly.getSlow())) {
                return null;
            } else {
                return doMetaTransform(appUriEffectiveHourly.getSlow());
            }
        }else {
            if ("[]".equals(appUriEffectiveHourly.getSlow())) {
                return baseData.getSlows();
            }

            List<MetaTrace> lists = doMetaTransform(appUriEffectiveHourly.getSlow());
            if (baseData != null && baseData.getSlows() != null) {
                for (MetaTrace metaTrace: lists) {
                    baseData.getSlows().add(metaTrace);
                }

                return baseData.getSlows();
            }

            return lists;
        }
    }

    public List<MetaTrace> combineException(BaseAppData baseData, AppUriEffectiveHourly appUriEffectiveHourly) {
        if (baseData == null && appUriEffectiveHourly == null) {
            return null;
        } else if (appUriEffectiveHourly == null) {
            return baseData.getExceptions();
        } else if (baseData == null) {
            if (appUriEffectiveHourly.getException() == null) {
                return null;
            }
            if ("[]".equals(appUriEffectiveHourly.getException())) {
                return null;
            } else {
                return doMetaTransform(appUriEffectiveHourly.getException());
            }
        } else {
            if ("[]".equals(appUriEffectiveHourly.getException())) {
                return baseData.getExceptions();
            }

            List<MetaTrace> lists = doMetaTransform(appUriEffectiveHourly.getException());
            if (baseData.getExceptions() != null) {
                for (MetaTrace metaTrace : lists) {
                    baseData.getExceptions().add(metaTrace);
                }

                return baseData.getExceptions();
            }

            return lists;
        }
    }

    public MetaTrace toMetaTrace(String info) {
        Gson gson = new GsonBuilder().create();
        MetaTrace metaTrace = null;
        try {
            metaTrace = gson.fromJson(info, MetaTrace.class);
        } catch (JsonSyntaxException e) {
            e.printStackTrace();
        }

        return metaTrace;
    }

    public List<MetaTrace> toMetaTraceList(String info) {
        Gson gson = new GsonBuilder().create();
        List<MetaTrace> lists = null;
        try {
            lists = gson.fromJson(info, new TypeToken<List<MetaTrace>>(){
            }.getType());
        } catch (JsonSyntaxException e) {
            e.printStackTrace();
        }

        return lists;
    }

    public Integer matchByKeyWord(String str, String key) {
        if (StringUtils.isEmpty(str)) {
            return  null;
        }

        String[] matches = str.split(key);
        return matches.length - 1;
    }

    public List<MetaTrace> doMetaTransform(String str) {
        if (StringUtils.isEmpty(str) || "[]".equals(str)) {
            return null;
        }
//
//        if (matchByKeyWord(str, "traceId") == 1) {
//            List<MetaTrace> metaTraces = new ArrayList<MetaTrace>();
//            metaTraces.add(toMetaTrace(str));
//            return metaTraces;
//        }
//
//        return toMetaTraceList(str);
        return toMetaTraceList(str);
    }
}
