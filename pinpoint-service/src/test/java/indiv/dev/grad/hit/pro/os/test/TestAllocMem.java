package indiv.dev.grad.hit.pro.os.test;

import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.constant.CrawlPeriod;
import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.model.AllocGraph;
import indiv.dev.grad.hit.pro.model.Track;
import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 12:14
 */
public class TestAllocMem {
    public static void main(String[] args) {
        AllocGraph allocGraph = new AllocGraph();
        List<String> injectList = new ArrayList<>();
        List<String> parseList = new ArrayList<>();
        List<String> fetchList = new ArrayList<>();
        SqlSession session = DbConnUtils.getSession().openSession();
        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            List<AppPerformance> injects = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.INJECT);
            List<AppPerformance> parses = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.PARSE);
            List<AppPerformance> fetch = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.FETCH);

            System.out.println(injects.size());
            System.out.println(parses.size());
            System.out.println(fetch.size());
            Track iTrack, pTrack, fTrack = null;
            for (AppPerformance app: injects) {
                iTrack = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                String raw = iTrack.getHeapAllocationRate();
                String data = raw.substring(0, raw.length() - 1);
                String sym = raw.substring(raw.length() - 1);
                Integer iData = null;
                if ("k".equals(sym)) {
                    iData = Integer.parseInt(data) / 1024;
                    injectList.add(iData.toString());
                } else {
                    injectList.add(data);
                }
            }
            for (AppPerformance app: parses) {
                pTrack = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                String raw = pTrack.getHeapAllocationRate();
                String data = raw.substring(0, raw.length() - 1);
                String sym = raw.substring(raw.length() - 1);
                Integer iData = null;
                if ("k".equals(sym)) {
                    iData = Integer.parseInt(data) / 1024;
                    parseList.add(iData.toString());
                } else {
                    parseList.add(data);
                }
            }
            for (AppPerformance app: fetch) {
                fTrack = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                String raw = fTrack.getHeapAllocationRate();
                String data = raw.substring(0, raw.length() - 1);
                String sym = raw.substring(raw.length() - 1);
                Integer iData = null;
                if ("k".equals(sym)) {
                    iData = Integer.parseInt(data) / 1024;
                    fetchList.add(iData.toString());
                } else {
                    fetchList.add(data);
                }
            }
            Collections.reverse(injectList);
            Collections.reverse(parseList);
            Collections.reverse(fetchList);
            System.out.println(injectList.size());
            System.out.println(parseList.size());
            System.out.println(fetchList.size());
            allocGraph.setInjectList(injectList);
            allocGraph.setParseList(parseList);
            allocGraph.setFetchList(fetchList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return;
    }
}
