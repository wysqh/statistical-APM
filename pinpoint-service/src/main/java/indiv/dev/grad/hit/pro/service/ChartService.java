package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.model.chart.BarEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.PieEChartsModel;

import java.util.Date;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:54
 */
public interface ChartService {
    public PieEChartsModel getEPieDataByCondition(Date start, Date end);
    public BarEChartsModel getEBarDataInHafHour();

}
