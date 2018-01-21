package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;

public class AppUriIssue implements Serializable {
    private Integer id;

    private String appName;

    private String uri;

    private Integer issueId;

    private String convertUri;

    private Byte issueLevel;

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

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri == null ? null : uri.trim();
    }

    public Integer getIssueId() {
        return issueId;
    }

    public void setIssueId(Integer issueId) {
        this.issueId = issueId;
    }

    public String getConvertUri() {
        return convertUri;
    }

    public void setConvertUri(String convertUri) {
        this.convertUri = convertUri == null ? null : convertUri.trim();
    }

    public Byte getIssueLevel() {
        return issueLevel;
    }

    public void setIssueLevel(Byte issueLevel) {
        this.issueLevel = issueLevel;
    }
}