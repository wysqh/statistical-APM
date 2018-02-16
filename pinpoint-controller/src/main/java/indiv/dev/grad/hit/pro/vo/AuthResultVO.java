package indiv.dev.grad.hit.pro.vo;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-17 3:53
 */
public class AuthResultVO {
    private boolean success;
    private String response;
    private String redirect;
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

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public String getRedirect() {
        return redirect;
    }

    public void setRedirect(String redirect) {
        this.redirect = redirect;
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
}
