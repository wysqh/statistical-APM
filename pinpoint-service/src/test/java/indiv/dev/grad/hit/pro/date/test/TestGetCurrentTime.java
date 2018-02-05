package indiv.dev.grad.hit.pro.date.test;

import indiv.dev.grad.hit.pro.utils.DateFormatUtils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-05 15:19
 */
public class TestGetCurrentTime {
    public static void main(String[] args) {
        String format = "yyyy-MM-dd HH:mm";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        String str = simpleDateFormat.format(new Date());
        Date date = DateFormatUtils.string2date(format, str);

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.DAY_OF_MONTH, -5);
        String val = simpleDateFormat.format(calendar.getTime());
        System.out.println(val);
    }
}
