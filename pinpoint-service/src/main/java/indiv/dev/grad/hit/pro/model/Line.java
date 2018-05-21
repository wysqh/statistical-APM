package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 11:32
 */
public class Line implements Serializable {
    private String id;
    private String userT;
    private String sysT;
    private String allocRate;
    private String name;

    public Line(String id, String userT, String sysT, String name) {
        this.id = id;
        this.userT = userT;
        this.sysT = sysT;
        this.name = name;
    }

    public Line(String id, String userT, String sysT, String allocRate, String name) {
        this.id = id;
        this.userT = userT;
        this.sysT = sysT;
        this.allocRate = allocRate;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserT() {
        return userT;
    }

    public void setUserT(String userT) {
        this.userT = userT;
    }

    public String getSysT() {
        return sysT;
    }

    public void setSysT(String sysT) {
        this.sysT = sysT;
    }

    public String getAllocRate() {
        return allocRate;
    }

    public void setAllocRate(String allocRate) {
        this.allocRate = allocRate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Line{" +
                "id='" + id + '\'' +
                ", userT='" + userT + '\'' +
                ", sysT='" + sysT + '\'' +
                ", allocRate='" + allocRate + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
