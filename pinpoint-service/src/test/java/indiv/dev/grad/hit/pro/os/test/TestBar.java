package indiv.dev.grad.hit.pro.os.test;

import indiv.dev.grad.hit.pro.service.impl.ChartServiceImpl;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 19:24
 */
public class TestBar {
    public static void main(String[] args) {
        ChartServiceImpl chartService = new ChartServiceImpl();
        System.out.println(chartService.getEBarDataInHafHour());
    }
}
