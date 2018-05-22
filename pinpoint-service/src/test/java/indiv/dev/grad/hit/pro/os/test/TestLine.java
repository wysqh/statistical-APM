package indiv.dev.grad.hit.pro.os.test;

import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.constant.CrawlPeriod;
import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.model.Track;
import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 13:57
 */
public class TestLine {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
        List<AppPerformance> list1 = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.GENERATE);
        Track track = new GsonBuilder().create().fromJson(list1.get(0).getObject(), Track.class);
        System.out.println(track.getTables());
        List<AppPerformance> list2 = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.PARSE);
        Track track2 = new GsonBuilder().create().fromJson(list1.get(0).getObject(), Track.class);
        System.out.println(track2.getTables());
    }
}
