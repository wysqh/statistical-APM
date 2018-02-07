package indiv.dev.grad.hit.pro.service.impl;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveDailyMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;
import indiv.dev.grad.hit.pro.service.ModuleLastPerformanceService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.Comparator;
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

        //按AvgResponseTime降序排列
        Collections.sort(appUriEffectiveDailyList, new Comparator<AppUriEffectiveDaily>() {
            public int compare(AppUriEffectiveDaily o1, AppUriEffectiveDaily o2) {
                return o2.getAvgRsp().compareTo(o1.getAvgRsp());
            }
        });
        return appUriEffectiveDailyList;
    }

    public List<AppUriEffectiveDaily> getMaxResponseDaily(Integer period) {
        String format = "yyyyMMdd";
        String str = DateFormatUtils.getArbitraryByToday(format, period);
        Integer iDate = null;
        try {
            iDate = DateFormatUtils.string2int(str);
        } catch (NumberFormatException nfe) {
            logger.error("Date string to int error: " + nfe.getMessage());
            nfe.printStackTrace();
        }
        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffectiveDaily> appUriEffectiveDailyList = null;
        AppUriEffectiveDailyMapper appUriEffectiveDailyMapper =
                session.getMapper(AppUriEffectiveDailyMapper.class);
        try {
            appUriEffectiveDailyList = appUriEffectiveDailyMapper.selectAverageRspByDate(iDate);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        //按MaxResponseTime降序排列
        Collections.sort(appUriEffectiveDailyList, new Comparator<AppUriEffectiveDaily>() {
            public int compare(AppUriEffectiveDaily o1, AppUriEffectiveDaily o2) {
                return o2.getMaxRsp().compareTo(o1.getMaxRsp());
            }
        });
        return appUriEffectiveDailyList;
    }

    public List<AppUriEffectiveDaily> getRequestsDaily(Integer period) {
        String format = "yyyyMMdd";
        String str = DateFormatUtils.getArbitraryByToday(format, period);
        Integer iDate = null;
        try {
            iDate = DateFormatUtils.string2int(str);
        } catch (NumberFormatException nfe) {
            logger.error("Date string to int error: " + nfe.getMessage());
            nfe.printStackTrace();
        }

        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffectiveDaily> appUriEffectiveDailyList = null;
        try {
            AppUriEffectiveDailyMapper appUriEffectiveDailyMapper =
                    session.getMapper(AppUriEffectiveDailyMapper.class);
            appUriEffectiveDailyList = appUriEffectiveDailyMapper.selectRequestByDate(iDate);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        //按RequestCount降序排列
        Collections.sort(appUriEffectiveDailyList, new Comparator<AppUriEffectiveDaily>() {
            public int compare(AppUriEffectiveDaily o1, AppUriEffectiveDaily o2) {
                return o2.getAmount().compareTo(o1.getAmount());
            }
        });
        return appUriEffectiveDailyList;
    }
}
