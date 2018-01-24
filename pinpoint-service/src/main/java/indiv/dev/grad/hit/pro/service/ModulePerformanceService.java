package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.VO.PerformanceStatistics;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.serializable.ExceptionInfo;
import indiv.dev.grad.hit.pro.serializable.MetaTrace;
import indiv.dev.grad.hit.pro.serializable.SlowInfo;

import java.util.List;
import java.util.Map;

public interface ModulePerformanceService {
    public List<String> getAllApplications();
    public String getApplicationById(Integer appId);
    public AppUriEffective getAppUriEffectiveById(Integer id);
    public List<PerformanceStatistics> getPerformanceStatisByAppName(String appName);
    public List<MetaTrace> transferString2Json(String slow);
    public Map<String, ExceptionInfo> getApplicationExceptionCountByName(String appName);
    public Map<String, SlowInfo> getApplicationSlowCountByName(String appName);
}
