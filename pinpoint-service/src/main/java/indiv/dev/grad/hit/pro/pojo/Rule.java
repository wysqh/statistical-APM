package indiv.dev.grad.hit.pro.pojo;

import java.io.Serializable;

public class Rule implements Serializable {
    private Integer id;

    private Integer ruleType;

    private String ruleExpression;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRuleType() {
        return ruleType;
    }

    public void setRuleType(Integer ruleType) {
        this.ruleType = ruleType;
    }

    public String getRuleExpression() {
        return ruleExpression;
    }

    public void setRuleExpression(String ruleExpression) {
        this.ruleExpression = ruleExpression == null ? null : ruleExpression.trim();
    }
}