package indiv.dev.grad.hit.pro.example;

import java.util.ArrayList;
import java.util.List;

public class UsersExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public UsersExample() {
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

        public Criteria andFullNameIsNull() {
            addCriterion("full_name is null");
            return (Criteria) this;
        }

        public Criteria andFullNameIsNotNull() {
            addCriterion("full_name is not null");
            return (Criteria) this;
        }

        public Criteria andFullNameEqualTo(String value) {
            addCriterion("full_name =", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameNotEqualTo(String value) {
            addCriterion("full_name <>", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameGreaterThan(String value) {
            addCriterion("full_name >", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameGreaterThanOrEqualTo(String value) {
            addCriterion("full_name >=", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameLessThan(String value) {
            addCriterion("full_name <", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameLessThanOrEqualTo(String value) {
            addCriterion("full_name <=", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameLike(String value) {
            addCriterion("full_name like", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameNotLike(String value) {
            addCriterion("full_name not like", value, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameIn(List<String> values) {
            addCriterion("full_name in", values, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameNotIn(List<String> values) {
            addCriterion("full_name not in", values, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameBetween(String value1, String value2) {
            addCriterion("full_name between", value1, value2, "fullName");
            return (Criteria) this;
        }

        public Criteria andFullNameNotBetween(String value1, String value2) {
            addCriterion("full_name not between", value1, value2, "fullName");
            return (Criteria) this;
        }

        public Criteria andEmailAddressIsNull() {
            addCriterion("email_address is null");
            return (Criteria) this;
        }

        public Criteria andEmailAddressIsNotNull() {
            addCriterion("email_address is not null");
            return (Criteria) this;
        }

        public Criteria andEmailAddressEqualTo(String value) {
            addCriterion("email_address =", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressNotEqualTo(String value) {
            addCriterion("email_address <>", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressGreaterThan(String value) {
            addCriterion("email_address >", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressGreaterThanOrEqualTo(String value) {
            addCriterion("email_address >=", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressLessThan(String value) {
            addCriterion("email_address <", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressLessThanOrEqualTo(String value) {
            addCriterion("email_address <=", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressLike(String value) {
            addCriterion("email_address like", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressNotLike(String value) {
            addCriterion("email_address not like", value, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressIn(List<String> values) {
            addCriterion("email_address in", values, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressNotIn(List<String> values) {
            addCriterion("email_address not in", values, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressBetween(String value1, String value2) {
            addCriterion("email_address between", value1, value2, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andEmailAddressNotBetween(String value1, String value2) {
            addCriterion("email_address not between", value1, value2, "emailAddress");
            return (Criteria) this;
        }

        public Criteria andPasswordIsNull() {
            addCriterion("password is null");
            return (Criteria) this;
        }

        public Criteria andPasswordIsNotNull() {
            addCriterion("password is not null");
            return (Criteria) this;
        }

        public Criteria andPasswordEqualTo(String value) {
            addCriterion("password =", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotEqualTo(String value) {
            addCriterion("password <>", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordGreaterThan(String value) {
            addCriterion("password >", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordGreaterThanOrEqualTo(String value) {
            addCriterion("password >=", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLessThan(String value) {
            addCriterion("password <", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLessThanOrEqualTo(String value) {
            addCriterion("password <=", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLike(String value) {
            addCriterion("password like", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotLike(String value) {
            addCriterion("password not like", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordIn(List<String> values) {
            addCriterion("password in", values, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotIn(List<String> values) {
            addCriterion("password not in", values, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordBetween(String value1, String value2) {
            addCriterion("password between", value1, value2, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotBetween(String value1, String value2) {
            addCriterion("password not between", value1, value2, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5IsNull() {
            addCriterion("password_md5 is null");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5IsNotNull() {
            addCriterion("password_md5 is not null");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5EqualTo(String value) {
            addCriterion("password_md5 =", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5NotEqualTo(String value) {
            addCriterion("password_md5 <>", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5GreaterThan(String value) {
            addCriterion("password_md5 >", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5GreaterThanOrEqualTo(String value) {
            addCriterion("password_md5 >=", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5LessThan(String value) {
            addCriterion("password_md5 <", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5LessThanOrEqualTo(String value) {
            addCriterion("password_md5 <=", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5Like(String value) {
            addCriterion("password_md5 like", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5NotLike(String value) {
            addCriterion("password_md5 not like", value, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5In(List<String> values) {
            addCriterion("password_md5 in", values, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5NotIn(List<String> values) {
            addCriterion("password_md5 not in", values, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5Between(String value1, String value2) {
            addCriterion("password_md5 between", value1, value2, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andPasswordMd5NotBetween(String value1, String value2) {
            addCriterion("password_md5 not between", value1, value2, "passwordMd5");
            return (Criteria) this;
        }

        public Criteria andUsersLevelIsNull() {
            addCriterion("users_level is null");
            return (Criteria) this;
        }

        public Criteria andUsersLevelIsNotNull() {
            addCriterion("users_level is not null");
            return (Criteria) this;
        }

        public Criteria andUsersLevelEqualTo(Byte value) {
            addCriterion("users_level =", value, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelNotEqualTo(Byte value) {
            addCriterion("users_level <>", value, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelGreaterThan(Byte value) {
            addCriterion("users_level >", value, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelGreaterThanOrEqualTo(Byte value) {
            addCriterion("users_level >=", value, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelLessThan(Byte value) {
            addCriterion("users_level <", value, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelLessThanOrEqualTo(Byte value) {
            addCriterion("users_level <=", value, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelIn(List<Byte> values) {
            addCriterion("users_level in", values, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelNotIn(List<Byte> values) {
            addCriterion("users_level not in", values, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelBetween(Byte value1, Byte value2) {
            addCriterion("users_level between", value1, value2, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andUsersLevelNotBetween(Byte value1, Byte value2) {
            addCriterion("users_level not between", value1, value2, "usersLevel");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenIsNull() {
            addCriterion("is_forbidden is null");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenIsNotNull() {
            addCriterion("is_forbidden is not null");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenEqualTo(Boolean value) {
            addCriterion("is_forbidden =", value, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenNotEqualTo(Boolean value) {
            addCriterion("is_forbidden <>", value, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenGreaterThan(Boolean value) {
            addCriterion("is_forbidden >", value, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenGreaterThanOrEqualTo(Boolean value) {
            addCriterion("is_forbidden >=", value, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenLessThan(Boolean value) {
            addCriterion("is_forbidden <", value, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenLessThanOrEqualTo(Boolean value) {
            addCriterion("is_forbidden <=", value, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenIn(List<Boolean> values) {
            addCriterion("is_forbidden in", values, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenNotIn(List<Boolean> values) {
            addCriterion("is_forbidden not in", values, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenBetween(Boolean value1, Boolean value2) {
            addCriterion("is_forbidden between", value1, value2, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andIsForbiddenNotBetween(Boolean value1, Boolean value2) {
            addCriterion("is_forbidden not between", value1, value2, "isForbidden");
            return (Criteria) this;
        }

        public Criteria andUserDescIsNull() {
            addCriterion("user_desc is null");
            return (Criteria) this;
        }

        public Criteria andUserDescIsNotNull() {
            addCriterion("user_desc is not null");
            return (Criteria) this;
        }

        public Criteria andUserDescEqualTo(String value) {
            addCriterion("user_desc =", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescNotEqualTo(String value) {
            addCriterion("user_desc <>", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescGreaterThan(String value) {
            addCriterion("user_desc >", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescGreaterThanOrEqualTo(String value) {
            addCriterion("user_desc >=", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescLessThan(String value) {
            addCriterion("user_desc <", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescLessThanOrEqualTo(String value) {
            addCriterion("user_desc <=", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescLike(String value) {
            addCriterion("user_desc like", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescNotLike(String value) {
            addCriterion("user_desc not like", value, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescIn(List<String> values) {
            addCriterion("user_desc in", values, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescNotIn(List<String> values) {
            addCriterion("user_desc not in", values, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescBetween(String value1, String value2) {
            addCriterion("user_desc between", value1, value2, "userDesc");
            return (Criteria) this;
        }

        public Criteria andUserDescNotBetween(String value1, String value2) {
            addCriterion("user_desc not between", value1, value2, "userDesc");
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