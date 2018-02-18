package indiv.dev.grad.hit.pro.model;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 4:57
 */
public class UserModel {
    private String name;
    private String picture;

    public UserModel() {
    }

    public UserModel(String name, String picture) {
        this.name = name;
        this.picture = picture;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
