package indiv.dev.grad.hit.pro.example;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AppUriEffectiveHourlyExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public AppUriEffectiveHourlyExample() {
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

        public Criteria andDayIsNull() {
            addCriterion("day is null");
            return (Criteria) this;
        }

        public Criteria andDayIsNotNull() {
            addCriterion("day is not null");
            return (Criteria) this;
        }

        public Criteria andDayEqualTo(Integer value) {
            addCriterion("day =", value, "day");
            return (Criteria) this;
        }

        public Criteria andDayNotEqualTo(Integer value) {
            addCriterion("day <>", value, "day");
            return (Criteria) this;
        }

        public Criteria andDayGreaterThan(Integer value) {
            addCriterion("day >", value, "day");
            return (Criteria) this;
        }

        public Criteria andDayGreaterThanOrEqualTo(Integer value) {
            addCriterion("day >=", value, "day");
            return (Criteria) this;
        }

        public Criteria andDayLessThan(Integer value) {
            addCriterion("day <", value, "day");
            return (Criteria) this;
        }

        public Criteria andDayLessThanOrEqualTo(Integer value) {
            addCriterion("day <=", value, "day");
            return (Criteria) this;
        }

        public Criteria andDayIn(List<Integer> values) {
            addCriterion("day in", values, "day");
            return (Criteria) this;
        }

        public Criteria andDayNotIn(List<Integer> values) {
            addCriterion("day not in", values, "day");
            return (Criteria) this;
        }

        public Criteria andDayBetween(Integer value1, Integer value2) {
            addCriterion("day between", value1, value2, "day");
            return (Criteria) this;
        }

        public Criteria andDayNotBetween(Integer value1, Integer value2) {
            addCriterion("day not between", value1, value2, "day");
            return (Criteria) this;
        }

        public Criteria andHourIsNull() {
            addCriterion("hour is null");
            return (Criteria) this;
        }

        public Criteria andHourIsNotNull() {
            addCriterion("hour is not null");
            return (Criteria) this;
        }

        public Criteria andHourEqualTo(Integer value) {
            addCriterion("hour =", value, "hour");
            return (Criteria) this;
        }

        public Criteria andHourNotEqualTo(Integer value) {
            addCriterion("hour <>", value, "hour");
            return (Criteria) this;
        }

        public Criteria andHourGreaterThan(Integer value) {
            addCriterion("hour >", value, "hour");
            return (Criteria) this;
        }

        public Criteria andHourGreaterThanOrEqualTo(Integer value) {
            addCriterion("hour >=", value, "hour");
            return (Criteria) this;
        }

        public Criteria andHourLessThan(Integer value) {
            addCriterion("hour <", value, "hour");
            return (Criteria) this;
        }

        public Criteria andHourLessThanOrEqualTo(Integer value) {
            addCriterion("hour <=", value, "hour");
            return (Criteria) this;
        }

        public Criteria andHourIn(List<Integer> values) {
            addCriterion("hour in", values, "hour");
            return (Criteria) this;
        }

        public Criteria andHourNotIn(List<Integer> values) {
            addCriterion("hour not in", values, "hour");
            return (Criteria) this;
        }

        public Criteria andHourBetween(Integer value1, Integer value2) {
            addCriterion("hour between", value1, value2, "hour");
            return (Criteria) this;
        }

        public Criteria andHourNotBetween(Integer value1, Integer value2) {
            addCriterion("hour not between", value1, value2, "hour");
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

        public Criteria andUriIsNull() {
            addCriterion("uri is null");
            return (Criteria) this;
        }

        public Criteria andUriIsNotNull() {
            addCriterion("uri is not null");
            return (Criteria) this;
        }

        public Criteria andUriEqualTo(String value) {
            addCriterion("uri =", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriNotEqualTo(String value) {
            addCriterion("uri <>", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriGreaterThan(String value) {
            addCriterion("uri >", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriGreaterThanOrEqualTo(String value) {
            addCriterion("uri >=", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriLessThan(String value) {
            addCriterion("uri <", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriLessThanOrEqualTo(String value) {
            addCriterion("uri <=", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriLike(String value) {
            addCriterion("uri like", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriNotLike(String value) {
            addCriterion("uri not like", value, "uri");
            return (Criteria) this;
        }

        public Criteria andUriIn(List<String> values) {
            addCriterion("uri in", values, "uri");
            return (Criteria) this;
        }

        public Criteria andUriNotIn(List<String> values) {
            addCriterion("uri not in", values, "uri");
            return (Criteria) this;
        }

        public Criteria andUriBetween(String value1, String value2) {
            addCriterion("uri between", value1, value2, "uri");
            return (Criteria) this;
        }

        public Criteria andUriNotBetween(String value1, String value2) {
            addCriterion("uri not between", value1, value2, "uri");
            return (Criteria) this;
        }

        public Criteria andAgentIsNull() {
            addCriterion("agent is null");
            return (Criteria) this;
        }

        public Criteria andAgentIsNotNull() {
            addCriterion("agent is not null");
            return (Criteria) this;
        }

        public Criteria andAgentEqualTo(String value) {
            addCriterion("agent =", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentNotEqualTo(String value) {
            addCriterion("agent <>", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentGreaterThan(String value) {
            addCriterion("agent >", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentGreaterThanOrEqualTo(String value) {
            addCriterion("agent >=", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentLessThan(String value) {
            addCriterion("agent <", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentLessThanOrEqualTo(String value) {
            addCriterion("agent <=", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentLike(String value) {
            addCriterion("agent like", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentNotLike(String value) {
            addCriterion("agent not like", value, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentIn(List<String> values) {
            addCriterion("agent in", values, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentNotIn(List<String> values) {
            addCriterion("agent not in", values, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentBetween(String value1, String value2) {
            addCriterion("agent between", value1, value2, "agent");
            return (Criteria) this;
        }

        public Criteria andAgentNotBetween(String value1, String value2) {
            addCriterion("agent not between", value1, value2, "agent");
            return (Criteria) this;
        }

        public Criteria andAmountIsNull() {
            addCriterion("amount is null");
            return (Criteria) this;
        }

        public Criteria andAmountIsNotNull() {
            addCriterion("amount is not null");
            return (Criteria) this;
        }

        public Criteria andAmountEqualTo(Integer value) {
            addCriterion("amount =", value, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountNotEqualTo(Integer value) {
            addCriterion("amount <>", value, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountGreaterThan(Integer value) {
            addCriterion("amount >", value, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountGreaterThanOrEqualTo(Integer value) {
            addCriterion("amount >=", value, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountLessThan(Integer value) {
            addCriterion("amount <", value, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountLessThanOrEqualTo(Integer value) {
            addCriterion("amount <=", value, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountIn(List<Integer> values) {
            addCriterion("amount in", values, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountNotIn(List<Integer> values) {
            addCriterion("amount not in", values, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountBetween(Integer value1, Integer value2) {
            addCriterion("amount between", value1, value2, "amount");
            return (Criteria) this;
        }

        public Criteria andAmountNotBetween(Integer value1, Integer value2) {
            addCriterion("amount not between", value1, value2, "amount");
            return (Criteria) this;
        }

        public Criteria andAvgRspIsNull() {
            addCriterion("avg_rsp is null");
            return (Criteria) this;
        }

        public Criteria andAvgRspIsNotNull() {
            addCriterion("avg_rsp is not null");
            return (Criteria) this;
        }

        public Criteria andAvgRspEqualTo(Float value) {
            addCriterion("avg_rsp =", value, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspNotEqualTo(Float value) {
            addCriterion("avg_rsp <>", value, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspGreaterThan(Float value) {
            addCriterion("avg_rsp >", value, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspGreaterThanOrEqualTo(Float value) {
            addCriterion("avg_rsp >=", value, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspLessThan(Float value) {
            addCriterion("avg_rsp <", value, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspLessThanOrEqualTo(Float value) {
            addCriterion("avg_rsp <=", value, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspIn(List<Float> values) {
            addCriterion("avg_rsp in", values, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspNotIn(List<Float> values) {
            addCriterion("avg_rsp not in", values, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspBetween(Float value1, Float value2) {
            addCriterion("avg_rsp between", value1, value2, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andAvgRspNotBetween(Float value1, Float value2) {
            addCriterion("avg_rsp not between", value1, value2, "avgRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspIsNull() {
            addCriterion("max_rsp is null");
            return (Criteria) this;
        }

        public Criteria andMaxRspIsNotNull() {
            addCriterion("max_rsp is not null");
            return (Criteria) this;
        }

        public Criteria andMaxRspEqualTo(Float value) {
            addCriterion("max_rsp =", value, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspNotEqualTo(Float value) {
            addCriterion("max_rsp <>", value, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspGreaterThan(Float value) {
            addCriterion("max_rsp >", value, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspGreaterThanOrEqualTo(Float value) {
            addCriterion("max_rsp >=", value, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspLessThan(Float value) {
            addCriterion("max_rsp <", value, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspLessThanOrEqualTo(Float value) {
            addCriterion("max_rsp <=", value, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspIn(List<Float> values) {
            addCriterion("max_rsp in", values, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspNotIn(List<Float> values) {
            addCriterion("max_rsp not in", values, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspBetween(Float value1, Float value2) {
            addCriterion("max_rsp between", value1, value2, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMaxRspNotBetween(Float value1, Float value2) {
            addCriterion("max_rsp not between", value1, value2, "maxRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspIsNull() {
            addCriterion("min_rsp is null");
            return (Criteria) this;
        }

        public Criteria andMinRspIsNotNull() {
            addCriterion("min_rsp is not null");
            return (Criteria) this;
        }

        public Criteria andMinRspEqualTo(Float value) {
            addCriterion("min_rsp =", value, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspNotEqualTo(Float value) {
            addCriterion("min_rsp <>", value, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspGreaterThan(Float value) {
            addCriterion("min_rsp >", value, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspGreaterThanOrEqualTo(Float value) {
            addCriterion("min_rsp >=", value, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspLessThan(Float value) {
            addCriterion("min_rsp <", value, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspLessThanOrEqualTo(Float value) {
            addCriterion("min_rsp <=", value, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspIn(List<Float> values) {
            addCriterion("min_rsp in", values, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspNotIn(List<Float> values) {
            addCriterion("min_rsp not in", values, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspBetween(Float value1, Float value2) {
            addCriterion("min_rsp between", value1, value2, "minRsp");
            return (Criteria) this;
        }

        public Criteria andMinRspNotBetween(Float value1, Float value2) {
            addCriterion("min_rsp not between", value1, value2, "minRsp");
            return (Criteria) this;
        }

        public Criteria andSlowIsNull() {
            addCriterion("slow is null");
            return (Criteria) this;
        }

        public Criteria andSlowIsNotNull() {
            addCriterion("slow is not null");
            return (Criteria) this;
        }

        public Criteria andSlowEqualTo(String value) {
            addCriterion("slow =", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowNotEqualTo(String value) {
            addCriterion("slow <>", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowGreaterThan(String value) {
            addCriterion("slow >", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowGreaterThanOrEqualTo(String value) {
            addCriterion("slow >=", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowLessThan(String value) {
            addCriterion("slow <", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowLessThanOrEqualTo(String value) {
            addCriterion("slow <=", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowLike(String value) {
            addCriterion("slow like", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowNotLike(String value) {
            addCriterion("slow not like", value, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowIn(List<String> values) {
            addCriterion("slow in", values, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowNotIn(List<String> values) {
            addCriterion("slow not in", values, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowBetween(String value1, String value2) {
            addCriterion("slow between", value1, value2, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowNotBetween(String value1, String value2) {
            addCriterion("slow not between", value1, value2, "slow");
            return (Criteria) this;
        }

        public Criteria andSlowCountIsNull() {
            addCriterion("slow_count is null");
            return (Criteria) this;
        }

        public Criteria andSlowCountIsNotNull() {
            addCriterion("slow_count is not null");
            return (Criteria) this;
        }

        public Criteria andSlowCountEqualTo(Integer value) {
            addCriterion("slow_count =", value, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountNotEqualTo(Integer value) {
            addCriterion("slow_count <>", value, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountGreaterThan(Integer value) {
            addCriterion("slow_count >", value, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("slow_count >=", value, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountLessThan(Integer value) {
            addCriterion("slow_count <", value, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountLessThanOrEqualTo(Integer value) {
            addCriterion("slow_count <=", value, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountIn(List<Integer> values) {
            addCriterion("slow_count in", values, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountNotIn(List<Integer> values) {
            addCriterion("slow_count not in", values, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountBetween(Integer value1, Integer value2) {
            addCriterion("slow_count between", value1, value2, "slowCount");
            return (Criteria) this;
        }

        public Criteria andSlowCountNotBetween(Integer value1, Integer value2) {
            addCriterion("slow_count not between", value1, value2, "slowCount");
            return (Criteria) this;
        }

        public Criteria andExceptionIsNull() {
            addCriterion("exception is null");
            return (Criteria) this;
        }

        public Criteria andExceptionIsNotNull() {
            addCriterion("exception is not null");
            return (Criteria) this;
        }

        public Criteria andExceptionEqualTo(String value) {
            addCriterion("exception =", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionNotEqualTo(String value) {
            addCriterion("exception <>", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionGreaterThan(String value) {
            addCriterion("exception >", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionGreaterThanOrEqualTo(String value) {
            addCriterion("exception >=", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionLessThan(String value) {
            addCriterion("exception <", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionLessThanOrEqualTo(String value) {
            addCriterion("exception <=", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionLike(String value) {
            addCriterion("exception like", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionNotLike(String value) {
            addCriterion("exception not like", value, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionIn(List<String> values) {
            addCriterion("exception in", values, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionNotIn(List<String> values) {
            addCriterion("exception not in", values, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionBetween(String value1, String value2) {
            addCriterion("exception between", value1, value2, "exception");
            return (Criteria) this;
        }

        public Criteria andExceptionNotBetween(String value1, String value2) {
            addCriterion("exception not between", value1, value2, "exception");
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