package indiv.dev.grad.hit.pro.chart.test;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.model.chart.PieEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.VN;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 2:11
 */
public class TestChartDB {
    public static void main(String[] args) {
        SqlSession sqlSession = DbConnUtils.getSession().openSession();
        List<VN<Integer, String>> appUriEffectiveList = null;
        String format = "yyyy-MM-dd HH:mm";
        String start = "2018-01-18 00:00";
        String end="2018-01-18 00:05";
        try {
            AppUriEffectiveMapper appUriEffectiveMapper = sqlSession.getMapper(AppUriEffectiveMapper.class);
            appUriEffectiveList = appUriEffectiveMapper.selectEPieDataByCondition(
                    DateFormatUtils.date2secs(DateFormatUtils.string2date(format, start)),
                    DateFormatUtils.date2secs(DateFormatUtils.string2date(format, end))
            );
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            sqlSession.close();
        }
        System.out.println("size: " + appUriEffectiveList.size());
        for (VN<Integer, String> appUriEffective : appUriEffectiveList) {
            System.out.println(appUriEffective.getName() + "," + appUriEffective.getValue());
        }
        Map<String, Integer> data = new HashMap<String, Integer>();
        data.put("da", 1);
        data.put("da", data.get("da")+1);
        System.out.println(data.get("da"));
    }
}
