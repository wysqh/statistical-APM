package indiv.dev.grad.hit.pro.service.impl;

import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.constant.CrawlPeriod;
import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.model.AllocGraph;
import indiv.dev.grad.hit.pro.model.CpuGraph;
import indiv.dev.grad.hit.pro.model.SingleTask;
import indiv.dev.grad.hit.pro.model.Track;
import indiv.dev.grad.hit.pro.model.chart.*;
import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.service.ChartService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.JsonUtils;
import indiv.dev.json.Line;
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
        List<String> requests = new ArrayList<String>();
        Long nearest = DateFormatUtils.current2unix(new Date(DateFormatUtils.getNearestIn5MinByLong()*1000)).getTime() / 1000;
        List<String> period = getNperiod(section);
        List<String> intervals = periodCombine(period);

        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            for (int i = 0; i < section - 1; ++i) {
                double request = appPerformanceMapper.selectRequestByLong(
                        DateFormatUtils.format(new Date(1000 * nearest), DateFormatUtils.fullFormat),
                        DateFormatUtils.format(new Date((nearest + DateFormatUtils.secondsIn5) * 1000), DateFormatUtils.fullFormat)) / 4;
                requests.add(request == 0 ? "0.1" : Double.toString(request));
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
        String nearest = DateFormatUtils.getIn5Min();
        Long nearestByLong = DateFormatUtils.getIn5MinByLong();
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
        AllocGraph allocGraph = new AllocGraph();
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

            allocGraph.setInjectList(injectList);
            allocGraph.setParseList(parseList);
            allocGraph.setFetchList(fetchList);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return allocGraph;
    }

    @Override
    public CpuGraph getCpuOcc() {
        List<String> injects = new ArrayList<>();
        List<String> generates = new ArrayList<>();
        List<String> fetches = new ArrayList<>();
        List<String> parses = new ArrayList<>();
        CpuGraph cpuGraph = new CpuGraph();
        SqlSession session = DbConnUtils.getSession().openSession();
        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            List<AppPerformance> tmpInjects = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.INJECT);
            List<AppPerformance> tmpGenerates = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.GENERATE);
            List<AppPerformance> tmpFetches = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.FETCH);
            List<AppPerformance> tmpParses = appPerformanceMapper.selectLatestSeqByJob(CrawlPeriod.PARSE);
            List<List<AppPerformance>> summaryList = new ArrayList<>();
            summaryList.add(tmpInjects);    summaryList.add(tmpGenerates);
            summaryList.add(tmpFetches);    summaryList.add(tmpParses);
            List<List<String>> iterList = new ArrayList<>();
            iterList.add(injects);  iterList.add(generates);
            iterList.add(fetches);  iterList.add(parses);
            for (int i = 0; i < summaryList.size(); i++) {
                for (AppPerformance app: summaryList.get(i)) {
                    Track track = new GsonBuilder()
                            .create()
                            .fromJson(app.getObject(), Track.class);
                    iterList.get(i).add(track.getAppCPU());
                }
            }
            for (List<String> list: iterList) {
                Collections.reverse(list);
            }
            cpuGraph.setInjectList(injects);
            cpuGraph.setGenerateList(generates);
            cpuGraph.setFetchList(fetches);
            cpuGraph.setParseList(parses);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return cpuGraph;
    }

    @Override
    public SingleTask getDisTaskDis() {
        SingleTask singleTask = new SingleTask();
        List<String> injectLine = new ArrayList<>();
        List<String> generateLine = new ArrayList<>();
        List<String> fetchLine = new ArrayList<>();
        List<String> parseLine = new ArrayList<>();
        List<String> labels = new ArrayList<>();
        SqlSession session = DbConnUtils.getSession().openSession();
        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            AppPerformance injects = appPerformanceMapper.selectMostLatestByJob(CrawlPeriod.INJECT);
            AppPerformance generates = appPerformanceMapper.selectMostLatestByJob(CrawlPeriod.GENERATE);
            AppPerformance fetches = appPerformanceMapper.selectMostLatestByJob(CrawlPeriod.FETCH);
            AppPerformance parses = appPerformanceMapper.selectMostLatestByJob(CrawlPeriod.PARSE);
            Track iTrack = new GsonBuilder()
                    .create()
                    .fromJson(injects.getObject(), Track.class);
            Track gTrack = new GsonBuilder()
                    .create()
                    .fromJson(generates.getObject(), Track.class);
            Track fTrack = new GsonBuilder()
                    .create()
                    .fromJson(fetches.getObject(), Track.class);
            Track pTrack = new GsonBuilder()
                    .create()
                    .fromJson(parses.getObject(), Track.class);

            for (Line line: iTrack.getTables()) {
                labels.add(line.getName());
            }
            for (Line line: iTrack.getTables()) {
                injectLine.add(line.getUserT().equals("0.00") ? "0.001" : line.getUserT());
            }
            for (Line line: gTrack.getTables()) {
                generateLine.add(line.getUserT().equals("0.00") ? "0.001" : line.getUserT());
            }
            for (Line line: fTrack.getTables()) {
                fetchLine.add(line.getUserT().equals("0.00") ? "0.001" : line.getUserT());
            }
            for (Line line: pTrack.getTables()) {
                parseLine.add(line.getUserT().equals("0.00") ? "0.001" : line.getUserT());
            }

            singleTask.setLabels(labels);
            singleTask.setInjectList(injectLine);   singleTask.setGenerateList(generateLine);
            singleTask.setFetchList(fetchLine);     singleTask.setParseList(parseLine);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return singleTask;
    }

    @Override
    public List<VN<String, String>> getSafePointPara() {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<VN<String, String>> lists = new ArrayList<>();
        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            List<AppPerformance> appPerformanceList = appPerformanceMapper.selectLatestInTenByJob(CrawlPeriod.PARSE);
            for (AppPerformance app: appPerformanceList) {
                Track track = new GsonBuilder()
                        .create()
                        .fromJson(app.getObject(), Track.class);
                lists.add(new VN<String, String>(track.getSafePointRate(), track.getSafePointRateAvg()));
            }
            Collections.reverse(lists);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return lists;
    }
}
