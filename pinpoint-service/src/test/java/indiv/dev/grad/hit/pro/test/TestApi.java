package indiv.dev.grad.hit.pro.test;

import indiv.dev.grad.hit.pro.example.AppUriEffectiveExample;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

public class TestApi {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppUriEffective> appUriEffectives = null;
        List<String> appNameList = null;
        try {
            AppUriEffectiveExample appUriEffectiveExample = new AppUriEffectiveExample();
            AppUriEffectiveExample.Criteria criteria = appUriEffectiveExample.createCriteria();
            appUriEffectiveExample.setDistinct(true);
            criteria.andAppNameIsNotNull();
            appUriEffectives = session.getMapper(AppUriEffectiveMapper.class)
                    .selectByExample(appUriEffectiveExample);
        } catch (Exception e) {
            e.printStackTrace();
        }

        appNameList = new ArrayList<String>();
        for (AppUriEffective e : appUriEffectives) {
            appNameList.add(e.getAppName());
        }
        for (String str: appNameList) {
            System.out.println(str);
        }
    }
}
