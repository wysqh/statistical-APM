package indiv.dev.grad.hit.pro.service.impl;

import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.model.chart.Legend;
import indiv.dev.grad.hit.pro.model.chart.PieEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.Series;
import indiv.dev.grad.hit.pro.model.chart.VN;
import indiv.dev.grad.hit.pro.service.ChartService;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.*;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:54
 */
public class ChartServiceImpl implements ChartService {
    public PieEChartsModel getEPieDataByCondition(Date start, Date end) {
        SqlSession sqlSession = DbConnUtils.getSession().openSession();
        List<VN<Integer, String>> vnList = null;
        List<String> appNameList = null;
        List<String> center = new ArrayList<String>();
        List<VN<Integer, String>> data = new ArrayList<VN<Integer, String>>();
        for (int i = 0; i < 2; i++) {
            center.add("50%");  // 图在画布中的(x, y)位置
        }

        try {
            AppUriEffectiveMapper appUriEffectiveMapper = sqlSession.getMapper(AppUriEffectiveMapper.class);
            vnList = appUriEffectiveMapper.selectEPieDataByCondition(
                    DateFormatUtils.date2secs(start),
                    DateFormatUtils.date2secs(end)
            );
            appNameList = appUriEffectiveMapper.selectApplication();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            sqlSession.close();
        }

        PieEChartsModel pieEChartsModel = new PieEChartsModel();
        pieEChartsModel.setLegend(new Legend(
                "vertical",
                "left",
                appNameList,
                null
        ));
        pieEChartsModel.setSeries(new Series(
                "App-Module",
                "pie",
                "80%",
                center,
                vnList
        ));

        return pieEChartsModel;
    }
}
