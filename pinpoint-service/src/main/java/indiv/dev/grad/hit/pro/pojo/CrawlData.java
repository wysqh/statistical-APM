package indiv.dev.grad.hit.pro.pojo;

import java.util.Date;

public class CrawlData {
    private Integer id;

    private String entity;

    private String theme;

    private String features;

    private String urls;

    private String tsql;

    private String users;

    private Boolean isFinished;

    private Date updateTime;

    private String extra;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEntity() {
        return entity;
    }

    public void setEntity(String entity) {
        this.entity = entity == null ? null : entity.trim();
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme == null ? null : theme.trim();
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features == null ? null : features.trim();
    }

    public String getUrls() {
        return urls;
    }

    public void setUrls(String urls) {
        this.urls = urls == null ? null : urls.trim();
    }

    public String getTsql() {
        return tsql;
    }

    public void setTsql(String tsql) {
        this.tsql = tsql == null ? null : tsql.trim();
    }

    public String getUsers() {
        return users;
    }

    public void setUsers(String users) {
        this.users = users == null ? null : users.trim();
    }

    public Boolean getIsFinished() {
        return isFinished;
    }

    public void setIsFinished(Boolean isFinished) {
        this.isFinished = isFinished;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getExtra() {
        return extra;
    }

    public void setExtra(String extra) {
        this.extra = extra == null ? null : extra.trim();
    }
}