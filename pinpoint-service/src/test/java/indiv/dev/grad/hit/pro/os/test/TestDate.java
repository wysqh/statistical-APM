package indiv.dev.grad.hit.pro.os.test;

import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 18:32
 */
public class TestDate {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();

        Integer section = 7;
        List<Integer> requests = new ArrayList<Integer>();
        Long nearest = DateFormatUtils.current2unix(new Date(DateFormatUtils.getNearestIn5MinByLong()*1000)).getTime() / 1000;
        System.out.println(nearest);
        List<String> period = getNperiod(section);
        List<String> intervals = periodCombine(period);

        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            for (int i = 0; i < section - 1; ++i) {
                requests.add(appPerformanceMapper.selectRequestByLong(
                        DateFormatUtils.format(new Date(1000 * nearest), DateFormatUtils.fullFormat),
                        DateFormatUtils.format(new Date((nearest + DateFormatUtils.secondsIn5) * 1000), DateFormatUtils.fullFormat)) / 4);
                System.out.println(DateFormatUtils.format(new Date(1000 * nearest), DateFormatUtils.fullFormat));
                System.out.println(DateFormatUtils.format(new Date((nearest + DateFormatUtils.secondsIn5) * 1000), DateFormatUtils.fullFormat));
                System.out.println((double)appPerformanceMapper.selectRequestByLong(
                        DateFormatUtils.format(new Date(1000 * nearest), DateFormatUtils.fullFormat),
                        DateFormatUtils.format(new Date((nearest + DateFormatUtils.secondsIn5) * 1000), DateFormatUtils.fullFormat)) / 4);
                nearest -= DateFormatUtils.secondsIn5;
            }
            Collections.reverse(requests);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
    }

    /*
       @Func: 获取最近连续N个5分钟间隔
    */
    public static List<String> getNperiod(Integer n) {
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
    public static List<String> periodCombine(List<String> list) {
        List<String> intervals = new ArrayList<String>();
        for (int i = list.size() - 1; i >= 1; i--) {
            intervals.add(list.get(i) + "-" + list.get(i-1));
        }

        return intervals;
    }
}
