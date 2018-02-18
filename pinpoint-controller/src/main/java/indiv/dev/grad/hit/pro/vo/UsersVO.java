package indiv.dev.grad.hit.pro.vo;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 17:09
 */
public class UsersVO {
    private String email;
    private String password;
    private Boolean rememberMe;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getRememberMe() {
        return rememberMe;
    }

    public void setRememberMe(Boolean rememberMe) {
        this.rememberMe = rememberMe;
    }
}
