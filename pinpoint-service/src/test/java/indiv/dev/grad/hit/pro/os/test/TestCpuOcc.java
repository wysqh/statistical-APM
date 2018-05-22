package indiv.dev.grad.hit.pro.os.test;

import indiv.dev.grad.hit.pro.model.CpuGraph;
import indiv.dev.grad.hit.pro.service.impl.ChartServiceImpl;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 13:14
 */
public class TestCpuOcc {
    public static void main(String[] args) {
        ChartServiceImpl chartService = new ChartServiceImpl();
        CpuGraph cpuGraph = chartService.getCpuOcc();
        System.out.println(cpuGraph);
    }
}
