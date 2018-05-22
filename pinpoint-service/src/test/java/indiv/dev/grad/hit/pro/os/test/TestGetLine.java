package indiv.dev.grad.hit.pro.os.test;

import indiv.dev.grad.hit.pro.model.SingleTask;
import indiv.dev.grad.hit.pro.service.impl.ChartServiceImpl;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 14:15
 */
public class TestGetLine {
    public static void main(String[] args) {
        ChartServiceImpl chartService = new ChartServiceImpl();
        SingleTask singleTask = chartService.getDisTaskDis();
        System.out.println(singleTask);
    }
}
