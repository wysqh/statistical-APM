package indiv.dev.grad.hit.pro.test;

import indiv.dev.grad.hit.pro.example.AppUriEffectiveExample;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

public class TestApi {
    public void getAllapplicationName() {
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

    List<String> getApplicationDistinct() {
        SqlSession session = DbConnUtils.getSession().openSession();

        List<String> appNames = null;
        try {
            AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
            appNames = appUriEffectiveMapper.selectApplication();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        for (String str: appNames) {
            System.out.println(str);
        }

        return appNames;
    }

    public static void main(String[] args) {
        TestApi testApi = new TestApi();
        testApi.getApplicationDistinct();
    }
}
