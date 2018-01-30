package indiv.dev.grad.hit.pro.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateFormatUtils {
    static Logger logger = LoggerFactory.getLogger(DateFormatUtils.class);

    // 日期格式
    static String format = "yyyy-MM-dd";
    // 时间
    static Long seconds = 24 * 60 * 60 * 1000 - 1L;
    // 日期时间默认格式
    static String fullFormat = "yyyy-MM-dd hh:mm:ss";

    static String tagDateFormat = "yyyy年MM月dd日";

    public static String fullFormat2 = "yyyy/MM/dd HH:mm";

    /**
     * 获取当前日期的没有时分秒的日期对象
     *
     * @param fromDate
     *
     * @return
     */
    public static Date getDateYYYYMMDD(Date fromDate) {
        // 返回当前的时间
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        //  获取年月日格式的日期字符
        String dateStr = simpleDateFormat.format(fromDate);
        Date date = null;
        try {
            // 把日期格式的字符转化为当前时间的日期格式
            date = simpleDateFormat.parse(dateStr);

        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public static boolean compareDate(Date date, Date date1) {
        if (date.after(date1)) {
            return true;
        }
        return false;
    }

    /**
     * 获取当天的最后一秒的时刻
     *
     * @param dateSrc
     *
     * @return
     */
    public static Date getLastTime(Date dateSrc) {
        Date date = getDateYYYYMMDD(dateSrc);
        return new Date(date.getTime() + seconds);
    }

    /**
     * @param date
     *
     * @return
     */
    public static String getYYYYMMDD(Date date) {
        // 返回当前的时间
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        //  获取年月日格式的日期字符
        String dateStr = simpleDateFormat.format(date);

        return dateStr;
    }

    /**
     * 格式化日期，如果不指定格式，按照默认的yyyy-MM-dd格式化，没有时分秒
     *
     * @param formatStr
     * @param date
     *
     * @return
     *
     * @throws ParseException
     */
    public static Date getDateFromString(String formatStr, String date) throws ParseException {
        if (formatStr == null) {
            formatStr = format;
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(formatStr);
        Date dt = simpleDateFormat.parse(date);
        return dt;
    }

    /**
     * 增加获取最后时刻的字符串
     *
     * @param format
     * @param dateSrc
     *
     * @return
     */
    public static String getStringLastTime(String format, Date dateSrc) {
        if (StringUtils.isEmpty(format)) {
            format = fullFormat;
        }
        Date lastTime = getLastTime(dateSrc);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        return simpleDateFormat.format(lastTime);
    }

    /**
     * tag标签中的时间格式化
     *
     * @param date
     *
     * @return
     */
    public static String getTagDateFormat(Date date) {
        if (date == null) {
            return null;
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(tagDateFormat);
        return simpleDateFormat.format(date);
    }

    /**
     * 获取之前或者之后几天的时间
     *
     * @param days
     *
     * @return
     */
    public static Date getNextOrBeforeDate(int days) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.DAY_OF_MONTH, days);
        return calendar.getTime();
    }

    public static String getFormatString(Date date, String format) {
        if (date == null) {
            return null;
        }
        if (format == null) {
            format = fullFormat;
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        //  获取年月日格式的日期字符
        String dateStr = simpleDateFormat.format(date);
        return dateStr;
    }
}
