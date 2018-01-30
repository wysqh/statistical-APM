package indiv.dev.grad.hit.pro.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDate {
    public static void main(String[] args) {
        Date date = new Date();
        String dateFormat = "yyyy-MM-dd";
        SimpleDateFormat df = new SimpleDateFormat(dateFormat);
        Long fifteenDaysLater =  24 * 60 * 60 * 1000L * 15;
        df.format(new Date(date.getTime() + fifteenDaysLater));

        try {
            System.out.println(df.parse("1970-01-01"));
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
