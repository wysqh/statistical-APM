package indiv.dev.grad.hit.pro.util;

import com.alibaba.dubbo.common.utils.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.CancellationException;

public class DateFormatUtils {
    static Logger logger = LoggerFactory.getLogger(indiv.dev.grad.hit.pro.utils.DateFormatUtils.class);

    // 日期格式
    public static String format = "yyyy-MM-dd";

    // 日期时间默认格式
    public static String fullFormat = "yyyy-MM-dd hh:mm:ss";

    public static String tagDateFormat = "yyyy年MM月dd日";

    public static String fullFormat2 = "yyyy-MM-dd HH:mm";

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
            format = indiv.dev.grad.hit.pro.utils.DateFormatUtils.format;
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

    public static String getCurrentTime() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(fullFormat2);
        String date = simpleDateFormat.format(new Date());

        return date;
    }

    public static String getCurrentTime(String format) {
        if (StringUtils.isEmpty(format)) {
            format = indiv.dev.grad.hit.pro.utils.DateFormatUtils.format;
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        String date = simpleDateFormat.format(new Date());

        return date;
    }

    /*
          以今日为基础, +1 表示明天
                        -1 表示昨天
          以此类推
     */
    public static String getArbitraryByToday(String format, int period) {
        String str = getCurrentTime();
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
}
