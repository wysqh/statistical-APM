package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;

public class WhiteList implements Serializable {
    private Integer id;

    private String objects;

    private Integer isEnable;

    private Integer type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getObjects() {
        return objects;
    }

    public void setObjects(String objects) {
        this.objects = objects == null ? null : objects.trim();
    }

    public Integer getIsEnable() {
        return isEnable;
    }

    public void setIsEnable(Integer isEnable) {
        this.isEnable = isEnable;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}