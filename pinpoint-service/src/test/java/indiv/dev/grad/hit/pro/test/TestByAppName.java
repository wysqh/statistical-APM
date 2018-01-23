package indiv.dev.grad.hit.pro.test;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveDailyMapper;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class TestByAppName {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
        List<AppUriEffective> effectivesList = appUriEffectiveMapper.selectPerformanceByAppName("sc-api");
        for (AppUriEffective appUriEffective : effectivesList) {
            System.out.println(appUriEffective.getApp_name() + ","
            + appUriEffective.getIpPort() + ","
            + appUriEffective.getUri() + ","
            + appUriEffective.getMaxRsp() + ","
            + appUriEffective.getMinRsp());
        }
        System.out.println(effectivesList.size());
    }
}
