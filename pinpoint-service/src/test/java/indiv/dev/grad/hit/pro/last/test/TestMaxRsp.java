package indiv.dev.grad.hit.pro.last.test;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveDailyMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 19:19
 */
public class TestMaxRsp {
    public static void main(String[] args) {
        String format = "yyyyMMdd";
        String str = DateFormatUtils.getArbitraryByToday(format, -1);
        System.out.println(str);
        Integer iDate = null;
        try {
            iDate = DateFormatUtils.string2int(str);
            System.out.println(iDate);
        }catch (NumberFormatException e) {
            e.printStackTrace();
        }

        SqlSession session = DbConnUtils.getSession().openSession();
        AppUriEffectiveDailyMapper appUriEffectiveDailyMapper =
                session.getMapper(AppUriEffectiveDailyMapper.class);
        List<AppUriEffectiveDaily> appUriEffectiveDailyList = appUriEffectiveDailyMapper.selectMaxRspByDate(iDate);

        System.out.println(appUriEffectiveDailyList.size());
        for (AppUriEffectiveDaily appUriEffectiveDaily: appUriEffectiveDailyList) {
            System.out.println(appUriEffectiveDaily.getUri() + " " +
                    appUriEffectiveDaily.getMaxRsp());
        }
    }
}
