package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;
import java.util.List;

public class ExceptionInfo implements Serializable{
    public List<MetaTrace> metaTraceList;
    public Integer exceptionCount;

    public ExceptionInfo(List<MetaTrace> metaTraceList, Integer exceptionCount) {
        this.metaTraceList = metaTraceList;
        this.exceptionCount = exceptionCount;
    }

    public List<MetaTrace> getMetaTraceList() {
        return metaTraceList;
    }

    public void setMetaTraceList(List<MetaTrace> metaTraceList) {
        this.metaTraceList = metaTraceList;
    }

    public Integer getExceptionCount() {
        return exceptionCount;
    }

    public void setExceptionCount(Integer exceptionCount) {
        this.exceptionCount = exceptionCount;
    }
}
