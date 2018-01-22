package indiv.dev.grad.hit.pro.service.impl;

import indiv.dev.grad.hit.pro.VO.PerformanceStatistics;
import indiv.dev.grad.hit.pro.example.AppUriEffectiveExample;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.jdbc.SQL;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    public List<PerformanceStatistics> getStatisticalGroupByUri() {
        return null;
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
                    appUriEffective.getAmount(), appUriEffective.getAvg_rsp(), appUriEffective.getMax_rsp(), appUriEffective.getMin_rsp(),
                    appUriEffective.getSlow_count());
            Map<String, String> exceptions = new HashMap<String, String>();
            Map<String, String> slows = new HashMap<String, String>();

            slows.put("" + appUriEffective.getId(), appUriEffective.getSlow());
            exceptions.put("" + appUriEffective.getId(), appUriEffective.getException());
            performanceStatistics.setSlowTop10(slows);
            performanceStatistics.setExceptionTop10(exceptions);

            performanceStatisticsList.add(performanceStatistics);
        }

        return performanceStatisticsList;
    }
}
