package indiv.dev.grad.hit.pro.model.chart;

import java.io.Serializable;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 2:37
 */
public class VN<V, N> implements Serializable {
    private V value;
    private N name;

    public VN() {

    }

    public VN(V value, N name) {
        this.value = value;
        this.name = name;
    }

    public V getValue() {
        return value;
    }

    public void setValue(V value) {
        this.value = value;
    }

    public N getName() {
        return name;
    }

    public void setName(N name) {
        this.name = name;
    }
}
