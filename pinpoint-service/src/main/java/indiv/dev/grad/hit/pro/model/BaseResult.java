package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 16:21
 */
public class BaseResult<T> implements Serializable{
    private String message;
    private boolean status;
    private T data;

    public BaseResult() {
    }

    public BaseResult(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    public BaseResult(String message, boolean status, T data) {
        this.message = message;
        this.status = status;
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public void setContent(T data, String message) {
        this.data = data;
        this.message = message;
        this.status = true;
    }

    public void setFailMessage(T data, String message) {
        this.data = data;
        this.message = message;
        this.status = false;
    }
}
