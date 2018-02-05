package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 16:04
 */
public interface ModuleLastPerformanceService {
    public List<AppUriEffectiveDaily> getAverageResponseDaily(Integer period);
    public List<AppUriEffectiveDaily> getMaxResponseDaily(Integer period);
    public List<AppUriEffectiveDaily> getRequestsDaily(Integer period);
}
