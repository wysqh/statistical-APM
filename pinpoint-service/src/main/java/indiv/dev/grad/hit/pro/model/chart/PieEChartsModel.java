package indiv.dev.grad.hit.pro.model.chart;

import java.io.Serializable;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:30
 */
public class PieEChartsModel implements Serializable {
    Legend legend;
    Series series;

    public PieEChartsModel() {

    }

    public PieEChartsModel(Legend legend, Series series) {
        this.legend = legend;
        this.series = series;
    }

    public Legend getLegend() {
        return legend;
    }

    public void setLegend(Legend legend) {
        this.legend = legend;
    }

    public Series getSeries() {
        return series;
    }

    public void setSeries(Series series) {
        this.series = series;
    }
}
