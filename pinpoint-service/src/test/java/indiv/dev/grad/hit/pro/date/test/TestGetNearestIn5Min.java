package indiv.dev.grad.hit.pro.date.test;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.model.chart.BarEChartsModel;
import indiv.dev.grad.hit.pro.service.impl.ChartServiceImpl;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 5:38
 */
public class TestGetNearestIn5Min {
    public static void main(String[] args) {
        System.out.println(DateFormatUtils.getNearestIn5Min());

        List<String> test = new ChartServiceImpl().getNperiod(7);
        for (String str: test) {
            System.out.println(str);
        }

        List<String> test2 = new ChartServiceImpl().periodCombine(test);
        for (String str: test2) {
            System.out.println(str);
        }

        BarEChartsModel barEChartsModel = new BarEChartsModel();
        SqlSession session = DbConnUtils.getSession().openSession();

        Integer section = 7;
        List<Integer> requests = new ArrayList<Integer>();
        Long nearest = DateFormatUtils.string2secs("yyyy-MM-dd hh:mm","2018-01-18 00:05");
        List<String> period = test;
        List<String> intervals = test2;

        try {
            AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
            for (int i = 0; i < section - 1; ++i) {
                requests.add(appUriEffectiveMapper.selectRequestByLong(
                        nearest - DateFormatUtils.secondsIn5,
                        nearest));
                System.out.println(DateFormatUtils.long2string(nearest, null));
                System.out.println(DateFormatUtils.long2string(nearest - DateFormatUtils.secondsIn5, null));
                nearest -= DateFormatUtils.secondsIn5;
            }

            Collections.reverse(requests);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        for (Integer i : requests) {
            System.out.println(i);
        }
    }
}
