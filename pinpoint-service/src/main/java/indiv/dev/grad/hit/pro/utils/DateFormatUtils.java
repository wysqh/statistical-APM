package indiv.dev.grad.hit.pro.utils;

import com.alibaba.dubbo.common.utils.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

public class DateFormatUtils {
    static Logger logger = LoggerFactory.getLogger(DateFormatUtils.class);

    // 5分钟的对应的秒
    public static final Long secondsIn5 = 5 * 60L;

    // 日期格式
    public static String format = "yyyy-MM-dd";

    // 日期时间默认格式
    public static String fullFormat = "yyyy-MM-dd hh:mm:ss";

    public static String tagDateFormat = "yyyy年MM月dd日";

    public static String fullFormat2 = "yyyy/MM/dd HH:mm";

    public static String fullFormat3 = "yyyy-MM-dd HH:mm";
    /**
     * 格式化日期，如果不指定格式，按照默认的yyyy-MM-dd格式化，没有时分秒
     *
     * @param format
     * @param date
     *
     * @return
     */
    public static Date string2date(String format, String date) {
        if (StringUtils.isEmpty(format)) {
            format = DateFormatUtils.format;
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        Date dt = null;
        try {
            dt = simpleDateFormat.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return dt;
    }



    public static Long string2mills(String format, String date) {
        Date dt = string2date(format, date);
        return dt.getTime();
    }

    public static Long string2secs(String format, String date) {
        Date dt = string2date(format, date);
        return dt.getTime()/1000;
    }

    public static Long date2mills(Date date) {
        return date.getTime();
    }

    public static Long date2secs(Date date) {
        return date.getTime()/1000;
    }

    public static String getCurrentTime(String format) {
        if (StringUtils.isEmpty(format)) {
            format = DateFormatUtils.format;
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        String date = simpleDateFormat.format(new Date());

        return date;
    }

    /*
      @params: format 默认格式 yyyy-MM-dd
      以今日为基础, +1 表示明天
                    -1 表示昨天
      以此类推
 */
    public static String getArbitraryByToday(String format, int period) {
        String str = getCurrentTime(format);
        Date date = string2date(format, str);
        Calendar calendar = Calendar.getInstance();

        calendar.setTime(date);
        calendar.add(Calendar.DAY_OF_MONTH, period);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);

        return simpleDateFormat.format(calendar.getTime());
    }

    public static Integer string2int(String date) throws NumberFormatException {
        return Integer.parseInt(date);
    }

    public static Date getStartTimeOfDay(long now, String timeZone) {
        String tz = StringUtils.isEmpty(timeZone) ? "GMT+8" : timeZone;
        TimeZone curTimeZone = TimeZone.getTimeZone(tz);
        Calendar calendar = Calendar.getInstance(curTimeZone);
        calendar.setTimeInMillis(now);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return calendar.getTime();
    }

    /*
        @Func: 将Date数据类型按format格式转化为String数据类型
     */
    public static String format(Date date, String format) {
        if (StringUtils.isEmpty(format)) {
            format = DateFormatUtils.fullFormat;
        }
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    /*
        @Func: 获取未超过当前时间的5分钟时间点,以整点计(xx:x0 和 xx:x5)
     */
    public static String getNearestIn5Min() {
        final Long secondsIn5Min = 5 * 60L;   //  5分钟为300秒
        Long sec = new Date().getTime() / 1000L;

        String format = "HH:mm";
        return DateFormatUtils.format(new Date((sec - sec % secondsIn5Min )* 1000L),
                format);
    }

    /*
        @Func: 获取未超过当前时间的5分钟时间点(Long),以整点计(xx:x0 和 xx:x5)
     */
    public static Long getNearestIn5MinByLong() {
        final Long secondsIn5Min = 5 * 60L;   //  5分钟为300秒
        Long sec = new Date().getTime() / 1000L;

       return sec - sec % secondsIn5Min;
    }

    /*
        @Func: Long(秒)转化为String
     */
    public static String long2string(Long second, String format) {
        if (StringUtils.isEmpty(format)) {
            format = DateFormatUtils.fullFormat;
        }

        return DateFormatUtils.format(new Date(second * 1000L),
                format);
    }

    /*
        @Func： 增加/减小当前时间/ 小时
     */
    public static Date changeByHour(Date date, int hour) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.HOUR_OF_DAY, hour);
        return calendar.getTime();
    }

    /*
        @Func: 将服务器Unix时间转换为当前时间(16小时)
     */
    public static Date unix2current(Date date) {
        return changeByHour(date, 16);
    }
}
