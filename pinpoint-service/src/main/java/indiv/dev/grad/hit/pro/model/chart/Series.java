package indiv.dev.grad.hit.pro.model.chart;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:37
 */
public class Series implements Serializable {
    String name;
    String type;
    String radius;
    List<String> center;
    List<VN<Integer, String>> data;

    public Series() {

    }

    public Series(String name, String type, String radius, List<String> center, List<VN<Integer, String>> data) {
        this.name = name;
        this.type = type;
        this.radius = radius;
        this.center = center;
        this.data = data;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRadius() {
        return radius;
    }

    public void setRadius(String radius) {
        this.radius = radius;
    }

    public List<String> getCenter() {
        return center;
    }

    public void setCenter(List<String> center) {
        this.center = center;
    }

    public List<VN<Integer, String>> getData() {
        return data;
    }

    public void setData(List<VN<Integer, String>> data) {
        this.data = data;
    }
}
