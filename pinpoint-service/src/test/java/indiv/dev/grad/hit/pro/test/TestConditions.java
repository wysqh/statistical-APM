package indiv.dev.grad.hit.pro.test;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.service.ModulePerformanceService;
import indiv.dev.grad.hit.pro.service.impl.ModulePerformanceServiceImpl;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-01-31 19:31
 */
public class TestConditions {
    private static final Logger logger = LoggerFactory.getLogger(TestConditions.class);

    public static void main(String[] args) {
        String start = "2018-01-18 00:00";
        String end = "2018-01-18 00:05";
        String format = "yyyy-MM-dd HH:mm";
        Date src = DateFormatUtils.string2date(format, start);
        Date dst = DateFormatUtils.string2date(format, end);

        SqlSession session = DbConnUtils.getSession().openSession();
        AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
        System.out.println(src.getTime());
        System.out.println(dst.getTime());
        List<AppUriEffective> appUriEffectiveList = appUriEffectiveMapper.selectAppUriEffectiveByConditions("sc-api", src.getTime()/1000, dst.getTime()/1000);
        if (appUriEffectiveList.isEmpty()) {
            System.out.println("Empty");
        } else {
            logger.info("List Size:" +  appUriEffectiveList.size());
            System.out.println(appUriEffectiveList.size());
        }

    }
}
