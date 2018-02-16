package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.model.PerformanceStatistics;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.model.ExceptionInfo;
import indiv.dev.grad.hit.pro.model.MetaTrace;
import indiv.dev.grad.hit.pro.model.SlowInfo;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface ModulePerformanceService {
    public List<String> getAllApplications();
    public List<String> getAppsNameBySimilar(String name);
    public String getApplicationById(Integer appId);
    public List<AppUriEffective> getAppUriEffectives();
    public AppUriEffective getAppUriEffectiveById(Integer id);
    public List<PerformanceStatistics> getPerformanceStatisByAppName(String appName);
    public List<MetaTrace> transferString2Json(String slow);
    public List<AppUriEffective> getUriEffectiveByConditions(Date start, Date end, String appName);
    public Map<String, ExceptionInfo> getApplicationExceptionCountByName(String appName);
    public Map<String, SlowInfo> getApplicationSlowCountByName(String appName);
}
