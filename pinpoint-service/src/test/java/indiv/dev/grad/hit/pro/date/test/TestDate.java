package indiv.dev.grad.hit.pro.date.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDate {
    public static void main(String[] args) {
        Date date = new Date();
        String dateFormat = "yyyy-MM-dd HH:mm";
        SimpleDateFormat df = new SimpleDateFormat(dateFormat);

        try {
            System.out.println(df.parse("2018-01-01 20:30"));
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
