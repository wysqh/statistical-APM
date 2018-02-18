package indiv.dev.grad.hit.pro.model;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 4:57
 */
public class UserModel {
    private String name;
    private String picture;
    private String email;

    public UserModel() {
    }

    public UserModel(String name, String picture, String email) {
        this.name = name;
        this.picture = picture;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
