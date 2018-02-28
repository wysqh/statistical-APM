package indiv.dev.grad.hit.pro.date.test;

import indiv.dev.grad.hit.pro.utils.DateFormatUtils;

import java.util.Date;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-28 12:23
 */
public class TestHourTrans {
    public static void main(String[] args) {
        String format = "yyyyMMddHH";
        Long a = Long.parseLong(DateFormatUtils.getArbitraryByToday(format, -1));
        System.out.println(a);
        System.out.println(DateFormatUtils.getStartTimeOfDay(new Date().getTime()-24*3600*1000, ""));

    }
}
