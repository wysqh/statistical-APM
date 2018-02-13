package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 17:17
 */
public interface ModuleUriCheckService {
    public List<AppUriEffectiveHourly> getUriPerformanceByQuery(String appName, String day, String uri);
}
