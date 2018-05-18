package indiv.dev.grad.hit.pro.example;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CrawlDataExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CrawlDataExample() {
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

        public Criteria andEntityIsNull() {
            addCriterion("entity is null");
            return (Criteria) this;
        }

        public Criteria andEntityIsNotNull() {
            addCriterion("entity is not null");
            return (Criteria) this;
        }

        public Criteria andEntityEqualTo(String value) {
            addCriterion("entity =", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotEqualTo(String value) {
            addCriterion("entity <>", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityGreaterThan(String value) {
            addCriterion("entity >", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityGreaterThanOrEqualTo(String value) {
            addCriterion("entity >=", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityLessThan(String value) {
            addCriterion("entity <", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityLessThanOrEqualTo(String value) {
            addCriterion("entity <=", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityLike(String value) {
            addCriterion("entity like", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotLike(String value) {
            addCriterion("entity not like", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityIn(List<String> values) {
            addCriterion("entity in", values, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotIn(List<String> values) {
            addCriterion("entity not in", values, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityBetween(String value1, String value2) {
            addCriterion("entity between", value1, value2, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotBetween(String value1, String value2) {
            addCriterion("entity not between", value1, value2, "entity");
            return (Criteria) this;
        }

        public Criteria andThemeIsNull() {
            addCriterion("theme is null");
            return (Criteria) this;
        }

        public Criteria andThemeIsNotNull() {
            addCriterion("theme is not null");
            return (Criteria) this;
        }

        public Criteria andThemeEqualTo(String value) {
            addCriterion("theme =", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeNotEqualTo(String value) {
            addCriterion("theme <>", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeGreaterThan(String value) {
            addCriterion("theme >", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeGreaterThanOrEqualTo(String value) {
            addCriterion("theme >=", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeLessThan(String value) {
            addCriterion("theme <", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeLessThanOrEqualTo(String value) {
            addCriterion("theme <=", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeLike(String value) {
            addCriterion("theme like", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeNotLike(String value) {
            addCriterion("theme not like", value, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeIn(List<String> values) {
            addCriterion("theme in", values, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeNotIn(List<String> values) {
            addCriterion("theme not in", values, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeBetween(String value1, String value2) {
            addCriterion("theme between", value1, value2, "theme");
            return (Criteria) this;
        }

        public Criteria andThemeNotBetween(String value1, String value2) {
            addCriterion("theme not between", value1, value2, "theme");
            return (Criteria) this;
        }

        public Criteria andFeaturesIsNull() {
            addCriterion("features is null");
            return (Criteria) this;
        }

        public Criteria andFeaturesIsNotNull() {
            addCriterion("features is not null");
            return (Criteria) this;
        }

        public Criteria andFeaturesEqualTo(String value) {
            addCriterion("features =", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesNotEqualTo(String value) {
            addCriterion("features <>", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesGreaterThan(String value) {
            addCriterion("features >", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesGreaterThanOrEqualTo(String value) {
            addCriterion("features >=", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesLessThan(String value) {
            addCriterion("features <", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesLessThanOrEqualTo(String value) {
            addCriterion("features <=", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesLike(String value) {
            addCriterion("features like", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesNotLike(String value) {
            addCriterion("features not like", value, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesIn(List<String> values) {
            addCriterion("features in", values, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesNotIn(List<String> values) {
            addCriterion("features not in", values, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesBetween(String value1, String value2) {
            addCriterion("features between", value1, value2, "features");
            return (Criteria) this;
        }

        public Criteria andFeaturesNotBetween(String value1, String value2) {
            addCriterion("features not between", value1, value2, "features");
            return (Criteria) this;
        }

        public Criteria andUrlsIsNull() {
            addCriterion("urls is null");
            return (Criteria) this;
        }

        public Criteria andUrlsIsNotNull() {
            addCriterion("urls is not null");
            return (Criteria) this;
        }

        public Criteria andUrlsEqualTo(String value) {
            addCriterion("urls =", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsNotEqualTo(String value) {
            addCriterion("urls <>", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsGreaterThan(String value) {
            addCriterion("urls >", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsGreaterThanOrEqualTo(String value) {
            addCriterion("urls >=", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsLessThan(String value) {
            addCriterion("urls <", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsLessThanOrEqualTo(String value) {
            addCriterion("urls <=", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsLike(String value) {
            addCriterion("urls like", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsNotLike(String value) {
            addCriterion("urls not like", value, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsIn(List<String> values) {
            addCriterion("urls in", values, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsNotIn(List<String> values) {
            addCriterion("urls not in", values, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsBetween(String value1, String value2) {
            addCriterion("urls between", value1, value2, "urls");
            return (Criteria) this;
        }

        public Criteria andUrlsNotBetween(String value1, String value2) {
            addCriterion("urls not between", value1, value2, "urls");
            return (Criteria) this;
        }

        public Criteria andTsqlIsNull() {
            addCriterion("tsql is null");
            return (Criteria) this;
        }

        public Criteria andTsqlIsNotNull() {
            addCriterion("tsql is not null");
            return (Criteria) this;
        }

        public Criteria andTsqlEqualTo(String value) {
            addCriterion("tsql =", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlNotEqualTo(String value) {
            addCriterion("tsql <>", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlGreaterThan(String value) {
            addCriterion("tsql >", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlGreaterThanOrEqualTo(String value) {
            addCriterion("tsql >=", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlLessThan(String value) {
            addCriterion("tsql <", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlLessThanOrEqualTo(String value) {
            addCriterion("tsql <=", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlLike(String value) {
            addCriterion("tsql like", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlNotLike(String value) {
            addCriterion("tsql not like", value, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlIn(List<String> values) {
            addCriterion("tsql in", values, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlNotIn(List<String> values) {
            addCriterion("tsql not in", values, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlBetween(String value1, String value2) {
            addCriterion("tsql between", value1, value2, "tsql");
            return (Criteria) this;
        }

        public Criteria andTsqlNotBetween(String value1, String value2) {
            addCriterion("tsql not between", value1, value2, "tsql");
            return (Criteria) this;
        }

        public Criteria andUsersIsNull() {
            addCriterion("users is null");
            return (Criteria) this;
        }

        public Criteria andUsersIsNotNull() {
            addCriterion("users is not null");
            return (Criteria) this;
        }

        public Criteria andUsersEqualTo(String value) {
            addCriterion("users =", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersNotEqualTo(String value) {
            addCriterion("users <>", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersGreaterThan(String value) {
            addCriterion("users >", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersGreaterThanOrEqualTo(String value) {
            addCriterion("users >=", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersLessThan(String value) {
            addCriterion("users <", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersLessThanOrEqualTo(String value) {
            addCriterion("users <=", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersLike(String value) {
            addCriterion("users like", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersNotLike(String value) {
            addCriterion("users not like", value, "users");
            return (Criteria) this;
        }

        public Criteria andUsersIn(List<String> values) {
            addCriterion("users in", values, "users");
            return (Criteria) this;
        }

        public Criteria andUsersNotIn(List<String> values) {
            addCriterion("users not in", values, "users");
            return (Criteria) this;
        }

        public Criteria andUsersBetween(String value1, String value2) {
            addCriterion("users between", value1, value2, "users");
            return (Criteria) this;
        }

        public Criteria andUsersNotBetween(String value1, String value2) {
            addCriterion("users not between", value1, value2, "users");
            return (Criteria) this;
        }

        public Criteria andIsFinishedIsNull() {
            addCriterion("is_finished is null");
            return (Criteria) this;
        }

        public Criteria andIsFinishedIsNotNull() {
            addCriterion("is_finished is not null");
            return (Criteria) this;
        }

        public Criteria andIsFinishedEqualTo(Boolean value) {
            addCriterion("is_finished =", value, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedNotEqualTo(Boolean value) {
            addCriterion("is_finished <>", value, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedGreaterThan(Boolean value) {
            addCriterion("is_finished >", value, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedGreaterThanOrEqualTo(Boolean value) {
            addCriterion("is_finished >=", value, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedLessThan(Boolean value) {
            addCriterion("is_finished <", value, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedLessThanOrEqualTo(Boolean value) {
            addCriterion("is_finished <=", value, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedIn(List<Boolean> values) {
            addCriterion("is_finished in", values, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedNotIn(List<Boolean> values) {
            addCriterion("is_finished not in", values, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedBetween(Boolean value1, Boolean value2) {
            addCriterion("is_finished between", value1, value2, "isFinished");
            return (Criteria) this;
        }

        public Criteria andIsFinishedNotBetween(Boolean value1, Boolean value2) {
            addCriterion("is_finished not between", value1, value2, "isFinished");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNull() {
            addCriterion("update_time is null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNotNull() {
            addCriterion("update_time is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeEqualTo(Date value) {
            addCriterion("update_time =", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotEqualTo(Date value) {
            addCriterion("update_time <>", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThan(Date value) {
            addCriterion("update_time >", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("update_time >=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThan(Date value) {
            addCriterion("update_time <", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("update_time <=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIn(List<Date> values) {
            addCriterion("update_time in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotIn(List<Date> values) {
            addCriterion("update_time not in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeBetween(Date value1, Date value2) {
            addCriterion("update_time between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("update_time not between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andExtraIsNull() {
            addCriterion("extra is null");
            return (Criteria) this;
        }

        public Criteria andExtraIsNotNull() {
            addCriterion("extra is not null");
            return (Criteria) this;
        }

        public Criteria andExtraEqualTo(String value) {
            addCriterion("extra =", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraNotEqualTo(String value) {
            addCriterion("extra <>", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraGreaterThan(String value) {
            addCriterion("extra >", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraGreaterThanOrEqualTo(String value) {
            addCriterion("extra >=", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraLessThan(String value) {
            addCriterion("extra <", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraLessThanOrEqualTo(String value) {
            addCriterion("extra <=", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraLike(String value) {
            addCriterion("extra like", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraNotLike(String value) {
            addCriterion("extra not like", value, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraIn(List<String> values) {
            addCriterion("extra in", values, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraNotIn(List<String> values) {
            addCriterion("extra not in", values, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraBetween(String value1, String value2) {
            addCriterion("extra between", value1, value2, "extra");
            return (Criteria) this;
        }

        public Criteria andExtraNotBetween(String value1, String value2) {
            addCriterion("extra not between", value1, value2, "extra");
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