package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.model.AllocGraph;
import indiv.dev.grad.hit.pro.model.CpuGraph;
import indiv.dev.grad.hit.pro.model.SingleTask;
import indiv.dev.grad.hit.pro.model.chart.BarEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.PieEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.VN;

import java.util.Date;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:54
 */
public interface ChartService {
    public PieEChartsModel getEPieDataByCondition(Date start, Date end);
    public BarEChartsModel getEBarDataInHafHour();
    public List<VN<String, Integer>> getGlobalData();
    public List<VN<Double, Double>> getCpuOccupation(); // 应用线程CPU占用比和跟踪线程占用比
    public AllocGraph getMemAlloc();
    public CpuGraph getCpuOcc();    // 分布式线程占用比
    public SingleTask getDisTaskDis();  //  单次任务线程比
    public List<VN<String, String>> getSafePointPara();
}
