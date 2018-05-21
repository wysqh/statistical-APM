package indiv.dev.grad.hit.pro.service.impl;

import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.constant.CrawlPeriod;
import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.model.AllocGraph;
import indiv.dev.grad.hit.pro.model.Track;
import indiv.dev.grad.hit.pro.model.chart.*;
import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.service.ChartService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.JsonUtils;
import org.apache.ibatis.jdbc.SQL;
import org.apache.ibatis.session.SqlSession;

import java.util.*;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:54
 */
public class ChartServiceImpl implements ChartService {
    public PieEChartsModel getEPieDataByCondition(Date start, Date end) {
        SqlSession sqlSession = DbConnUtils.getSession().openSession();
        List<VN<Integer, String>> vnList = null;
        List<String> appNameList = null;
        List<String> center = new ArrayList<String>();
        List<VN<Integer, String>> data = new ArrayList<VN<Integer, String>>();
        for (int i = 0; i < 2; i++) {
            center.add("50%");  // 图在画布中的(x, y)位置
        }

        try {
            AppUriEffectiveMapper appUriEffectiveMapper = sqlSession.getMapper(AppUriEffectiveMapper.class);
            vnList = appUriEffectiveMapper.selectEPieDataByCondition(
                    DateFormatUtils.date2secs(start),
                    DateFormatUtils.date2secs(end)
            );
            appNameList = appUriEffectiveMapper.selectApplication();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            sqlSession.close();
        }

        PieEChartsModel pieEChartsModel = new PieEChartsModel();
        pieEChartsModel.setLegend(new Legend(
                "vertical",
                "left",
                appNameList,
                null
        ));
        pieEChartsModel.setSeries(new Series(
                "App-Module",
                "pie",
                "80%",
                center,
                vnList
        ));

        return pieEChartsModel;
    }

    public BarEChartsModel getEBarDataInHafHour() {
        BarEChartsModel barEChartsModel = new BarEChartsModel();
        SqlSession session = DbConnUtils.getSession().openSession();

        Integer section = 7;
        List<Integer> requests = new ArrayList<Integer>();
        Long nearest = DateFormatUtils.getNearestIn5MinByLong();
        List<String> period = getNperiod(section);
        List<String> intervals = periodCombine(period);

        try {
            AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
            for (int i = 0; i < section - 1; ++i) {
                requests.add(appUriEffectiveMapper.selectRequestByLong(
                        nearest - DateFormatUtils.secondsIn5,
                        nearest));
                nearest -= DateFormatUtils.secondsIn5;
            }

            Collections.reverse(requests);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        barEChartsModel.setKeys(intervals);
        barEChartsModel.setValues(requests);

        return barEChartsModel;
    }

    /*
        @Func: 获取最近连续N个5分钟间隔
     */
    public List<String> getNperiod(Integer n) {
        if (n == null) {
            return null;
        }

        String format = "HH:mm";
        List<String> period = new ArrayList<String>();
        String nearest = DateFormatUtils.getNearestIn5Min();
        Long nearestByLong = DateFormatUtils.getNearestIn5MinByLong();
        for (int i = 0; i < n; i++) {
            period.add(nearest);
            nearestByLong -= DateFormatUtils.secondsIn5;
            nearest = DateFormatUtils.long2string(nearestByLong, format);
        }

        return period;
    }

    /*
        @Func: N个5分钟间隔组合
     */
    public List<String> periodCombine(List<String> list) {
        List<String> intervals = new ArrayList<String>();
        for (int i = list.size() - 1; i >= 1; i--) {
            intervals.add(list.get(i) + "-" + list.get(i-1));
        }

        return intervals;
    }

    @Override
    public List<VN<String, Integer>> getGlobalData() {
        Date date = DateFormatUtils.getStartTimeOfDay(System.currentTimeMillis(),"");
        List<VN<String, Integer>> lists = new ArrayList<>();
        for (int i = 0; i < 108; i ++) {
            String dt = DateFormatUtils.format(DateFormatUtils.changeByDay(date, -1*i),"YYYY-MM-dd");
            if (i <= 30) {
                lists.add(new VN<String, Integer>(dt, new Random().nextInt(3) + 3));
            } else if (i <= 60) {
                lists.add(new VN<String, Integer>(dt, new Random().nextInt(3) + 2));
            } else  {
                lists.add(new VN<String, Integer>(dt, new Random().nextInt(3)));
            }
        }
        Collections.reverse(lists);
        return lists;
    }

    @Override
    public List<VN<Double, Double>> getCpuOccupation() {
        List<VN<Double, Double>> lists = new ArrayList<>();
        SqlSession session = DbConnUtils.getSession().openSession();
        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            List<AppPerformance> appPerformances = appPerformanceMapper.selectLatestSevenSeq();
            for (AppPerformance app: appPerformances) {
                Track track = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                lists.add(new VN(Double.parseDouble(track.getProcessCPU()),
                        Double.parseDouble(track.getOtherCPU())));
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        Collections.reverse(lists);
        return lists;
    }

    @Override
    public AllocGraph getMemAlloc() {
        List<String> injectList = new ArrayList<>();
        List<String> parseList = new ArrayList<>();
        List<String> fetchList = new ArrayList<>();
        AllocGraph allocGraph = null;
        SqlSession session = DbConnUtils.getSession().openSession();
        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            List<AppPerformance> injects = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.INJECT);
            List<AppPerformance> parses = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.PARSE);
            List<AppPerformance> fetch = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.FETCH);
            Track iTrack, pTrack, fTrack = null;
            for (AppPerformance app: injects) {
                iTrack = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                injectList.add(iTrack.getHeapAllocationRate());
            }
            for (AppPerformance app: parses) {
                pTrack = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                parseList.add(pTrack.getHeapAllocationRate());
            }
            for (AppPerformance app: fetch) {
                fTrack = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                fetchList.add(fTrack.getHeapAllocationRate());
            }
            Collections.reverse(injectList);
            Collections.reverse(parseList);
            Collections.reverse(fetchList);

            allocGraph.setInjectList(injectList);
            allocGraph.setParseList(parseList);
            allocGraph.setFetchList(fetchList);
        } catch (Exception e) {

        } finally {
            session.close();
        }

        return allocGraph;
    }
}
