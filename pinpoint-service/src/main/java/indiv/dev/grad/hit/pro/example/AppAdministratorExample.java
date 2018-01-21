package indiv.dev.grad.hit.pro.example;

import java.util.ArrayList;
import java.util.List;

public class AppAdministratorExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public AppAdministratorExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andAppNameIsNull() {
            addCriterion("app_name is null");
            return (Criteria) this;
        }

        public Criteria andAppNameIsNotNull() {
            addCriterion("app_name is not null");
            return (Criteria) this;
        }

        public Criteria andAppNameEqualTo(String value) {
            addCriterion("app_name =", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameNotEqualTo(String value) {
            addCriterion("app_name <>", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameGreaterThan(String value) {
            addCriterion("app_name >", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameGreaterThanOrEqualTo(String value) {
            addCriterion("app_name >=", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameLessThan(String value) {
            addCriterion("app_name <", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameLessThanOrEqualTo(String value) {
            addCriterion("app_name <=", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameLike(String value) {
            addCriterion("app_name like", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameNotLike(String value) {
            addCriterion("app_name not like", value, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameIn(List<String> values) {
            addCriterion("app_name in", values, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameNotIn(List<String> values) {
            addCriterion("app_name not in", values, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameBetween(String value1, String value2) {
            addCriterion("app_name between", value1, value2, "appName");
            return (Criteria) this;
        }

        public Criteria andAppNameNotBetween(String value1, String value2) {
            addCriterion("app_name not between", value1, value2, "appName");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorIsNull() {
            addCriterion("app_administrator is null");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorIsNotNull() {
            addCriterion("app_administrator is not null");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorEqualTo(String value) {
            addCriterion("app_administrator =", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorNotEqualTo(String value) {
            addCriterion("app_administrator <>", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorGreaterThan(String value) {
            addCriterion("app_administrator >", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorGreaterThanOrEqualTo(String value) {
            addCriterion("app_administrator >=", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorLessThan(String value) {
            addCriterion("app_administrator <", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorLessThanOrEqualTo(String value) {
            addCriterion("app_administrator <=", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorLike(String value) {
            addCriterion("app_administrator like", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorNotLike(String value) {
            addCriterion("app_administrator not like", value, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorIn(List<String> values) {
            addCriterion("app_administrator in", values, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorNotIn(List<String> values) {
            addCriterion("app_administrator not in", values, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorBetween(String value1, String value2) {
            addCriterion("app_administrator between", value1, value2, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppAdministratorNotBetween(String value1, String value2) {
            addCriterion("app_administrator not between", value1, value2, "appAdministrator");
            return (Criteria) this;
        }

        public Criteria andAppLevelIsNull() {
            addCriterion("app_level is null");
            return (Criteria) this;
        }

        public Criteria andAppLevelIsNotNull() {
            addCriterion("app_level is not null");
            return (Criteria) this;
        }

        public Criteria andAppLevelEqualTo(Integer value) {
            addCriterion("app_level =", value, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelNotEqualTo(Integer value) {
            addCriterion("app_level <>", value, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelGreaterThan(Integer value) {
            addCriterion("app_level >", value, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelGreaterThanOrEqualTo(Integer value) {
            addCriterion("app_level >=", value, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelLessThan(Integer value) {
            addCriterion("app_level <", value, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelLessThanOrEqualTo(Integer value) {
            addCriterion("app_level <=", value, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelIn(List<Integer> values) {
            addCriterion("app_level in", values, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelNotIn(List<Integer> values) {
            addCriterion("app_level not in", values, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelBetween(Integer value1, Integer value2) {
            addCriterion("app_level between", value1, value2, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppLevelNotBetween(Integer value1, Integer value2) {
            addCriterion("app_level not between", value1, value2, "appLevel");
            return (Criteria) this;
        }

        public Criteria andAppSystemIsNull() {
            addCriterion("app_system is null");
            return (Criteria) this;
        }

        public Criteria andAppSystemIsNotNull() {
            addCriterion("app_system is not null");
            return (Criteria) this;
        }

        public Criteria andAppSystemEqualTo(String value) {
            addCriterion("app_system =", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemNotEqualTo(String value) {
            addCriterion("app_system <>", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemGreaterThan(String value) {
            addCriterion("app_system >", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemGreaterThanOrEqualTo(String value) {
            addCriterion("app_system >=", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemLessThan(String value) {
            addCriterion("app_system <", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemLessThanOrEqualTo(String value) {
            addCriterion("app_system <=", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemLike(String value) {
            addCriterion("app_system like", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemNotLike(String value) {
            addCriterion("app_system not like", value, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemIn(List<String> values) {
            addCriterion("app_system in", values, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemNotIn(List<String> values) {
            addCriterion("app_system not in", values, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemBetween(String value1, String value2) {
            addCriterion("app_system between", value1, value2, "appSystem");
            return (Criteria) this;
        }

        public Criteria andAppSystemNotBetween(String value1, String value2) {
            addCriterion("app_system not between", value1, value2, "appSystem");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}