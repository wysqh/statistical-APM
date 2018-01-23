package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.VO.PerformanceStatistics;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.serializable.MetaTrace;

import java.util.List;

public interface ModulePerformanceService {
    public List<String> getAllApplications();
    public AppUriEffective getAppUriEffectiveById(Integer id);
    public List<PerformanceStatistics> getStatisticalGroupByUri();
    public List<PerformanceStatistics> getPerformanceStatisByAppName(String appName);
    public List<MetaTrace> transferString2Json(String slow);
}
