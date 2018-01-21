package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;
import java.util.Date;

public class TaskPool implements Serializable {
    private Integer id;

    private String taskHandler;

    private Byte taskStatus;

    private Byte taskType;

    private Date updateTime;

    private String taskParams;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTaskHandler() {
        return taskHandler;
    }

    public void setTaskHandler(String taskHandler) {
        this.taskHandler = taskHandler == null ? null : taskHandler.trim();
    }

    public Byte getTaskStatus() {
        return taskStatus;
    }

    public void setTaskStatus(Byte taskStatus) {
        this.taskStatus = taskStatus;
    }

    public Byte getTaskType() {
        return taskType;
    }

    public void setTaskType(Byte taskType) {
        this.taskType = taskType;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getTaskParams() {
        return taskParams;
    }

    public void setTaskParams(String taskParams) {
        this.taskParams = taskParams == null ? null : taskParams.trim();
    }
}