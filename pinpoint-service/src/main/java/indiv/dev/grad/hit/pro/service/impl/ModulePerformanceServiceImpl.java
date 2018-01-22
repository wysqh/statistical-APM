package indiv.dev.grad.hit.pro.service.impl;

import indiv.dev.grad.hit.pro.VO.PerformanceStatistics;
import indiv.dev.grad.hit.pro.example.AppUriEffectiveExample;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

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
}
