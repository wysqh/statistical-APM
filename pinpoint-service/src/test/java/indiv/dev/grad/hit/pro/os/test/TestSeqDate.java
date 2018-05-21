package indiv.dev.grad.hit.pro.os.test;

import indiv.dev.grad.hit.pro.model.chart.VN;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 20:12
 */
public class TestSeqDate {
    public static void main(String[] args) {
        System.out.println(DateFormatUtils.format(DateFormatUtils.getStartTimeOfDay(System.currentTimeMillis(),""), "YYYY-MM-dd"));
        Date date = DateFormatUtils.getStartTimeOfDay(System.currentTimeMillis(),"");
        List<VN<String, Integer>> lists = new ArrayList<>();
        for (int i = 0; i < 108; i ++) {
            String dt = DateFormatUtils.format(DateFormatUtils.changeByDay(date, -1*i),"YYYY-MM-dd");
            if (i <= 30) {
                lists.add(new VN<String, Integer>(dt, new Random().nextInt(10)));
            } else if (i <= 60) {
                lists.add(new VN<String, Integer>(dt, new Random().nextInt(10) + 3));
            } else  {
                lists.add(new VN<String, Integer>(dt, new Random().nextInt(12) + 5));
            }
        }

        for (VN vn: lists) {
            System.out.println(vn);
        }
    }
}
