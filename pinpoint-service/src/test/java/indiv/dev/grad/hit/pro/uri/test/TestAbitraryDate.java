package indiv.dev.grad.hit.pro.uri.test;

import indiv.dev.grad.hit.pro.utils.DateFormatUtils;

import java.util.Date;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 18:41
 */
public class TestAbitraryDate {
    public static void main(String[] args) {
        String format = "yyyyMMddHH";
        Date date = new Date();
        Date strDate = DateFormatUtils.getStartTimeOfDay(date.getTime(), "");
        System.out.println(DateFormatUtils.format(strDate, format));
    }
}
