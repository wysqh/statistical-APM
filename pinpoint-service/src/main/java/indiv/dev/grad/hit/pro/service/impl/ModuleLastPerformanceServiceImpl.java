package indiv.dev.grad.hit.pro.service.impl;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveDailyMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;
import indiv.dev.grad.hit.pro.service.ModuleLastPerformanceService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 16:06
 */
public class ModuleLastPerformanceServiceImpl implements ModuleLastPerformanceService {
    private final static Logger logger = LoggerFactory.getLogger(ModuleLastPerformanceService.class);

    public List<AppUriEffectiveDaily> getAverageResponseDaily(Integer period) {
        String format = "yyyyMMdd";
        String str = DateFormatUtils.getArbitraryByToday(format, period);
        Integer iDate = null;
        try {
            iDate = DateFormatUtils.string2int(str);
            logger.info("iDate is:" + iDate);
        } catch (NumberFormatException nfe) {
            nfe.printStackTrace();
        }

        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffectiveDaily> appUriEffectiveDailyList = null;
        AppUriEffectiveDailyMapper appUriEffectiveDailyMapper =
                session.getMapper(AppUriEffectiveDailyMapper.class);
        try {
            appUriEffectiveDailyList = appUriEffectiveDailyMapper.selectAverageRspByDate(iDate);
            logger.info("appUriEffectiveDailyList size:" + appUriEffectiveDailyList.size());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return appUriEffectiveDailyList;
    }

    public List<AppUriEffectiveDaily> getMaxResponseDaily(Integer period) {
        return null;
    }

    public List<AppUriEffectiveDaily> getRequestsDaily(Integer period) {
        return null;
    }
}
