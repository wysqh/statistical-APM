package indiv.dev.grad.hit.pro.util;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-01-31 15:47
 */
public class BaseObjectResult<T> {
    private String message;
    private boolean status;
    private T data;

    public BaseObjectResult() {
    }

    public BaseObjectResult(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    public BaseObjectResult(String message, boolean status, T data) {
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

    public void setFailReason(T data, String message) {
        this.data = data;
        this.message = message;
        this.status = false;
    }
}
