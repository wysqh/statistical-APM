package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.VO.PerformanceStatistics;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;

import java.util.List;

public interface ModulePerformanceService {
    public List<String> getAllApplications();
    public AppUriEffective getAppUriEffectiveById(Integer id);
    public List<PerformanceStatistics> getStatisticalGroupByUri();
    public List<PerformanceStatistics> getPerformanceStatisByAppName(String appName);
}
