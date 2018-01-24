package indiv.dev.grad.hit.pro.serializable;

import java.io.Serializable;
import java.util.List;

public class SlowInfo implements Serializable {
    public List<MetaTrace> metaTraceList;
    public Integer slowCount;

    public SlowInfo(List<MetaTrace> metaTraceList, Integer slowCount) {
        this.metaTraceList = metaTraceList;
        this.slowCount = slowCount;
    }

    public List<MetaTrace> getMetaTraceList() {
        return metaTraceList;
    }

    public void setMetaTraceList(List<MetaTrace> metaTraceList) {
        this.metaTraceList = metaTraceList;
    }

    public Integer getSlowCount() {
        return slowCount;
    }

    public void setSlowCount(Integer slowCount) {
        this.slowCount = slowCount;
    }
}
