package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;

public class AppAdministrator implements Serializable{
    private Integer id;

    private String appName;

    private String appAdministrator;

    private Integer appLevel;

    private String appSystem;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName == null ? null : appName.trim();
    }

    public String getAppAdministrator() {
        return appAdministrator;
    }

    public void setAppAdministrator(String appAdministrator) {
        this.appAdministrator = appAdministrator == null ? null : appAdministrator.trim();
    }

    public Integer getAppLevel() {
        return appLevel;
    }

    public void setAppLevel(Integer appLevel) {
        this.appLevel = appLevel;
    }

    public String getAppSystem() {
        return appSystem;
    }

    public void setAppSystem(String appSystem) {
        this.appSystem = appSystem == null ? null : appSystem.trim();
    }
}