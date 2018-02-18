package indiv.dev.grad.hit.pro.vo;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-17 3:53
 */
public class AuthResultVO {
    private boolean success;
    private List<String> errors;
    private List<String> messages;
    private String token;

    public AuthResultVO() {

    }

    public AuthResultVO(boolean success) {
        this.success = success;
    }

    public AuthResultVO(boolean success, String token) {
        this.success = success;
        this.token = token;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public List<String> getMessages() {
        return messages;
    }

    public void setMessages(List<String> messages) {
        this.messages = messages;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void addErrors(String error) {
        if (errors == null) {
            errors = new ArrayList<String>();
        }
        errors.add(error);
    }
}
