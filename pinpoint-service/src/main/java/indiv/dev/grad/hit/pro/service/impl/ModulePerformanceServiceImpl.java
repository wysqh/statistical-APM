package indiv.dev.grad.hit.pro.service.impl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import indiv.dev.grad.hit.pro.model.PerformanceStatistics;
import indiv.dev.grad.hit.pro.mapper.AppAdministratorMapper;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.model.ExceptionInfo;
import indiv.dev.grad.hit.pro.model.MetaTrace;
import indiv.dev.grad.hit.pro.model.SlowInfo;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
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

    public List<AppUriEffective> getUriEffectiveByConditions(Date start, Date end, String appName) {
        SqlSession sqlSession = DbConnUtils.getSession().openSession();
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

        return appUriEffectiveList;
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
}
