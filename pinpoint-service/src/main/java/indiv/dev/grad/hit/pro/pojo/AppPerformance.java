package indiv.dev.grad.hit.pro.pojo;

import java.util.Date;

public class AppPerformance {
    private Integer id;

    private String job;

    private String object;

    private Date updateTime;

    private String extra;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job == null ? null : job.trim();
    }

    public String getObject() {
        return object;
    }

    public void setObject(String object) {
        this.object = object == null ? null : object.trim();
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

    @Override
    public String toString() {
        return "AppPerformance{" +
                "id=" + id +
                ", job='" + job + '\'' +
                ", object='" + object + '\'' +
                ", updateTime=" + updateTime +
                ", extra='" + extra + '\'' +
                '}';
    }
}