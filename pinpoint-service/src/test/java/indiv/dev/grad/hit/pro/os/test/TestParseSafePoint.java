package indiv.dev.grad.hit.pro.os.test;

import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.constant.CrawlPeriod;
import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.model.Track;
import indiv.dev.grad.hit.pro.model.chart.VN;
import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 15:16
 */
public class TestParseSafePoint {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
        List<AppPerformance> appPerformanceList = appPerformanceMapper.selectLatestInTenByJob(CrawlPeriod.PARSE);
        System.out.println(appPerformanceList.size());
        List<VN<String, String>> lists = new ArrayList<>();
        for (AppPerformance app: appPerformanceList) {
            Track track = new GsonBuilder()
                    .create()
                    .fromJson(app.getObject(), Track.class);
            lists.add(new VN<String, String>(track.getSafePointRate(), track.getSafePointRateAvg()));
        }
        Collections.reverse(lists);
        for (VN vn: lists) {
            System.out.println(vn);
        }
    }
}
