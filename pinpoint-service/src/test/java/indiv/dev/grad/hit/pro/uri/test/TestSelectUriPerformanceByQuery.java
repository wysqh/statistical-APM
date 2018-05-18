package indiv.dev.grad.hit.pro.uri.test;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveHourlyMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 17:26
 */
public class TestSelectUriPerformanceByQuery {
    public static void main(String[] args) {
        SqlSession sqlSession = DbConnUtils.getSession().openSession();
        AppUriEffectiveHourlyMapper appUriEffectiveHourlyMapper = sqlSession.getMapper(AppUriEffectiveHourlyMapper.class);
        Integer day = 20180227;
        String appName = "sc-mct-web";
        String uri = "/index.jsp";

        List<AppUriEffectiveHourly> appUriEffectiveHourlyList =
                appUriEffectiveHourlyMapper.selectUriPerformanceByQuery(appName, day, uri);

        System.out.println("size:" + appUriEffectiveHourlyList.size());
        for (AppUriEffectiveHourly appUriEffectiveHourly: appUriEffectiveHourlyList) {
            System.out.println(appUriEffectiveHourly.getHour());
//            System.out.println(app    UriEffectiveHourly.getAmount() + ", " +
//            appUriEffectiveHourly.getAvgRsp() + "," +
//            appUriEffectiveHourly.getUri());
        }
    }
}
