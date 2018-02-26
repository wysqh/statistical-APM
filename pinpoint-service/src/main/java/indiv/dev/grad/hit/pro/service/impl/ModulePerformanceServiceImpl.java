package indiv.dev.grad.hit.pro.service.impl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import indiv.dev.grad.hit.pro.model.*;
import indiv.dev.grad.hit.pro.mapper.AppAdministratorMapper;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.StringUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.*;

public class ModulePerformanceServiceImpl implements ModulePerformanceService {

    public List<String> getAllApplications() {
        SqlSession session = DbConnUtils.getSession().openSession();

        List<String> appNameList = null;
        try {
          AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
          appNameList = appUriEffectiveMapper.selectApplication();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return appNameList;
    }

    public String getApplicationById(Integer appId) {
        SqlSession session = DbConnUtils.getSession().openSession();
        String appName = "";
        try {
            AppAdministratorMapper administratorMapper = session.getMapper(AppAdministratorMapper.class);
            appName = administratorMapper.selectApplicationById(appId);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return appName;
    }

    public AppUriEffective getAppUriEffectiveById(Integer id) {
        SqlSession session = DbConnUtils.getSession().openSession();
        AppUriEffective appUriEffective = null;
        try {
            AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
            appUriEffective = appUriEffectiveMapper.selectByPrimaryKey(id);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            session.close();
        }

        return appUriEffective;
    }

    public List<PerformanceStatistics> getPerformanceStatisByAppName(String appName) {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffective> appUriEffectivesList = null;
        List<PerformanceStatistics> performanceStatisticsList = new ArrayList<PerformanceStatistics>();
        try {
            AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
            appUriEffectivesList = appUriEffectiveMapper.selectPerformanceByAppName(appName);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        for (AppUriEffective appUriEffective : appUriEffectivesList) {
            PerformanceStatistics performanceStatistics = new PerformanceStatistics(appUriEffective.getUri(),
                    appUriEffective.getAmount(), appUriEffective.getAvgRsp(), appUriEffective.getMaxRsp(), appUriEffective.getMinRsp(),
                    appUriEffective.getSlowCount());
            Map<String, List<MetaTrace>> exceptions = new HashMap<String, List<MetaTrace>>();
            Map<String, List<MetaTrace>> slows = new HashMap<String, List<MetaTrace>>();

            slows.put("" + appUriEffective.getId(), transferString2Json(appUriEffective.getSlow()));
            exceptions.put("" + appUriEffective.getId(), transferString2Json(appUriEffective.getException()));

            performanceStatistics.setSlows(slows);
            performanceStatistics.setExceptions(exceptions);
            performanceStatisticsList.add(performanceStatistics);
        }

        return performanceStatisticsList;
    }

    public List<MetaTrace> transferString2Json(String slow) {
        SqlSession session = DbConnUtils.getSession().openSession();

        AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
        List<MetaTrace> metaTraceList = null;

        Gson gson = new GsonBuilder().create();
        metaTraceList = gson.fromJson(slow, new TypeToken<List<MetaTrace>>(){
        }.getType());

        return metaTraceList;
    }

    public Map<String, ExceptionInfo> getApplicationExceptionCountByName(String appName) {
        SqlSession session = DbConnUtils.getSession().openSession();

        AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
        List<AppUriEffective> appUriEffectiveList = null;
        Map<String, ExceptionInfo> exceptionInfoMap = new HashMap<String, ExceptionInfo>();
        try {
            appUriEffectiveList = appUriEffectiveMapper.selectExceptionsByAppName(appName);
            for (AppUriEffective appUriEffective: appUriEffectiveList) {
                if (exceptionInfoMap.containsKey(appUriEffective.getIpPort())) {
                    List<MetaTrace> tmpList = transferString2Json(appUriEffective.getException());
                    for (MetaTrace metaData: tmpList) {
                        exceptionInfoMap.get(appUriEffective.getIpPort()).getMetaTraceList().add(metaData);
                    }
                }else {
                    List<MetaTrace> tmpList = transferString2Json(appUriEffective.getException());
                    exceptionInfoMap.put(appUriEffective.getIpPort(), new ExceptionInfo(new ArrayList<MetaTrace>(), 0));
                    for (MetaTrace metaData : tmpList) {
                        exceptionInfoMap.get(appUriEffective.getIpPort()).getMetaTraceList().add(metaData);
                    }
                }
            }

            Iterator<Map.Entry<String, ExceptionInfo>> entries = exceptionInfoMap.entrySet().iterator();
            while (entries.hasNext()) {
                Map.Entry<String, ExceptionInfo> entry = entries.next();
                List<MetaTrace> metaTraceList = entry.getValue().getMetaTraceList();
                entry.getValue().setExceptionCount(metaTraceList.size());
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return exceptionInfoMap;
    }

    public Map<String, SlowInfo> getApplicationSlowCountByName(String appName) {
        SqlSession session = DbConnUtils.getSession().openSession();

        AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
        List<AppUriEffective> appUriEffectiveList = null;
        Map<String, SlowInfo> slowMap = new HashMap<String, SlowInfo>();
        try {
            appUriEffectiveList = appUriEffectiveMapper.selectSlowsByAppName(appName);
            for (AppUriEffective appUriEffective: appUriEffectiveList) {
                if (slowMap.containsKey(appUriEffective.getIpPort())) {
                    List<MetaTrace> tmpList = transferString2Json(appUriEffective.getSlow());
                    for (MetaTrace metaData: tmpList) {
                        slowMap.get(appUriEffective.getIpPort()).getMetaTraceList().add(metaData);
                    }
                }else {
                    List<MetaTrace> tmpList = transferString2Json(appUriEffective.getSlow());
                    slowMap.put(appUriEffective.getIpPort(), new SlowInfo(new ArrayList<MetaTrace>(), 0));
                    for (MetaTrace metaData : tmpList) {
                        slowMap.get(appUriEffective.getIpPort()).getMetaTraceList().add(metaData);
                    }
                }
            }

           Iterator<Map.Entry<String, SlowInfo>> entries = slowMap.entrySet().iterator();
            while (entries.hasNext()) {
                Map.Entry<String, SlowInfo> entry = entries.next();
                List<MetaTrace> metaTraceList = entry.getValue().getMetaTraceList();
                entry.getValue().setSlowCount(metaTraceList.size());
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return slowMap;
    }

    public List<AppUriEffective> getAppUriEffectives() {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffective> appUriEffectiveList = null;
        final Integer LIMITS = 100;

        try {
            AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
            if (appUriEffectiveMapper.selectTotalCount() > LIMITS) {
                appUriEffectiveList = appUriEffectiveMapper.selectAppEffectivesWithLimit(LIMITS);
            } else {
                appUriEffectiveList = appUriEffectiveMapper.selectAppEffectives();
            }
        } catch (Exception e){
            e.printStackTrace();
        } finally {
            session.close();
        }

        return appUriEffectiveList;
    }

    public List<BaseData> getUriEffectiveByConditions(Date start, Date end, String appName) {
        SqlSession sqlSession = DbConnUtils.getSession().openSession();
        Map<String, BaseData> appMaps = new HashMap<String, BaseData>();
        List<BaseData> rtVals = new ArrayList<BaseData>();
        List<AppUriEffective> appUriEffectiveList = null;

        try {
            AppUriEffectiveMapper appUriEffectiveMapper = sqlSession.getMapper(AppUriEffectiveMapper.class);
            appUriEffectiveList = appUriEffectiveMapper.selectAppUriEffectiveByConditions(appName,
                    DateFormatUtils.date2secs(start),
                    DateFormatUtils.date2secs(end)
                    );
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            sqlSession.close();
        }


        // 相同模块合并
        for (AppUriEffective appUriEffective: appUriEffectiveList) {
            if (appMaps.get(appUriEffective.getUri()) == null) {
                appUriEffective.setAvgRsp(appUriEffective.getAvgRsp() * appUriEffective.getAmount());   // 平均部分预处理

                BaseData baseData = new BaseData(appUriEffective);
                baseData.setSlows(doMetaTransform(appUriEffective.getSlow()));  // 慢数据类型转换
                baseData.setExceptions(doMetaTransform(appUriEffective.getException()));    // 异常数据类型转换
                appMaps.put(appUriEffective.getUri(), baseData);
            } else {
                BaseData tmp = appMaps.get(appUriEffective.getUri());

                tmp.setUri(appUriEffective.getUri());
                tmp.setRequests(tmp.getRequests() + appUriEffective.getAmount());
                tmp.setAvgResTime(tmp.getAvgResTime() + appUriEffective.getAvgRsp() * appUriEffective.getAmount());   // 平均部分预处理
                tmp.setMaxResTime(tmp.getMaxResTime() > appUriEffective.getMaxRsp() ? tmp.getMaxResTime() : appUriEffective.getMaxRsp());
                tmp.setMinResTime(tmp.getMinResTime() < appUriEffective.getMinRsp() ? tmp.getMinResTime() : appUriEffective.getMinRsp());
                tmp.setSlowReq(tmp.getSlowReq() + appUriEffective.getSlowCount());
                tmp.setSlows(combineSlow(tmp, appUriEffective));
                tmp.setExceptions(combineException(tmp, appUriEffective));

                appMaps.put(tmp.getUri(), tmp);
            }
        }

        for (Map.Entry<String, BaseData> entry: appMaps.entrySet()) {
            BaseData tmp = entry.getValue();
            tmp.setAvgResTime(tmp.getAvgResTime() / tmp.getRequests());
            entry.setValue(tmp);

            rtVals.add(tmp);
        }

        return rtVals;
    }

    public List<String> getAppsNameBySimilar(String name) {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<String> list = null;

        try {
            AppAdministratorMapper appAdministratorMapper = session.getMapper(AppAdministratorMapper.class);
            list = appAdministratorMapper.selectAppsBySimilar(name);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return list;
    }

    public List<MetaTrace> combineSlow(BaseData baseData, AppUriEffective appUriEffective) {
        if ("[]".equals(appUriEffective.getSlow())) {
            return baseData.getSlows();
        }

        List<MetaTrace> lists = doMetaTransform(appUriEffective.getSlow());
        if (baseData.getSlows() != null) {
            for (MetaTrace metaTrace: lists) {
                baseData.getSlows().add(metaTrace);
            }

            return baseData.getSlows();
        }

        return lists;
    }

    public List<MetaTrace> combineException(BaseData baseData, AppUriEffective appUriEffective) {
        if ("[]".equals(appUriEffective.getException())) {
            return baseData.getExceptions();
        }

        List<MetaTrace> lists = doMetaTransform(appUriEffective.getException());
        if (baseData.getExceptions() != null) {
            for (MetaTrace metaTrace : lists) {
                baseData.getExceptions().add(metaTrace);
            }

            return baseData.getExceptions();
        }

        return lists;
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
//        if (StringUtils.isEmpty(str) || "[]".equals(str)) {
//            return null;
//        }
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
