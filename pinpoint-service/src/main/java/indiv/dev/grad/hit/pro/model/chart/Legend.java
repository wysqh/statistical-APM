package indiv.dev.grad.hit.pro.model.chart;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-20 1:35
 */
public class Legend implements Serializable {
    private String orient;
    private String left;
    private List<String> data;
    private String textStyle;

    public Legend() {

    }

    public Legend(String orient, String left, List<String> data, String textStyle) {
        this.orient = orient;
        this.left = left;
        this.data = data;
        this.textStyle = textStyle;
    }

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    public String getLeft() {
        return left;
    }

    public void setLeft(String left) {
        this.left = left;
    }

    public String getOrient() {
        return orient;
    }

    public void setOrient(String orient) {
        this.orient = orient;
    }

    public String getTextStyle() {
        return textStyle;
    }

    public void setTextStyle(String textStyle) {
        this.textStyle = textStyle;
    }
}
