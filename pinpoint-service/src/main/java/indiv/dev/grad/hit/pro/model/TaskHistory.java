package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;
import java.util.Date;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-19 13:39
 */
public class TaskHistory implements Serializable {
    private String crawlSeq;
    private String users;
    private String email;
    private String userLevel;
    private String tsql;
    private String fetchTime;
    private Boolean isFinished;

    public TaskHistory () {

    }

    public TaskHistory(String crawlSeq, String users, String email, String userLevel, String tsql, String fetchTime, Boolean isFinished) {
        this.crawlSeq = crawlSeq;
        this.users = users;
        this.email = email;
        this.userLevel = userLevel;
        this.tsql = tsql;
        this.fetchTime = fetchTime;
        this.isFinished = isFinished;
    }

    public String getCrawlSeq() {
        return crawlSeq;
    }

    public void setCrawlSeq(String crawlSeq) {
        this.crawlSeq = crawlSeq;
    }

    public String getUsers() {
        return users;
    }

    public void setUsers(String users) {
        this.users = users;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserLevel() {
        return userLevel;
    }

    public void setUserLevel(String userLevel) {
        this.userLevel = userLevel;
    }

    public String getTsql() {
        return tsql;
    }

    public void setTsql(String tsql) {
        this.tsql = tsql;
    }

    public String getFetchTime() {
        return fetchTime;
    }

    public void setFetchTime(String fetchTime) {
        this.fetchTime = fetchTime;
    }

    public Boolean getFinished() {
        return isFinished;
    }

    public void setFinished(Boolean finished) {
        isFinished = finished;
    }

    @Override
    public String toString() {
        return "TaskHistory{" +
                "crawlSeq='" + crawlSeq + '\'' +
                ", users='" + users + '\'' +
                ", email='" + email + '\'' +
                ", userLevel='" + userLevel + '\'' +
                ", tsql='" + tsql + '\'' +
                ", fetchTime=" + fetchTime +
                ", isFinished=" + isFinished +
                '}';
    }
}
