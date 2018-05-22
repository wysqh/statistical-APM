package indiv.dev.grad.hit.pro.model.chart;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 5:27
 */
public class BarEChartsModel implements Serializable {
    List<String> keys;
    List<String> values;

    public List<String> getKeys() {
        return keys;
    }

    public void setKeys(List<String> keys) {
        this.keys = keys;
    }

    public List<String> getValues() {
        return values;
    }

    public void setValues(List<String> values) {
        this.values = values;
    }

    @Override
    public String toString() {
        return "BarEChartsModel{" +
                "keys=" + keys +
                ", values=" + values +
                '}';
    }
}
