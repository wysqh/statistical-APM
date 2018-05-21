package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 21:44
 */
public class AllocGraph implements Serializable {
    private List<String> injectList;
    private List<String> fetchList;
    private List<String> parseList;

    public AllocGraph() {

    }

    public AllocGraph(List<String> injectList, List<String> fetchList, List<String> parseList) {
        this.injectList = injectList;
        this.fetchList = fetchList;
        this.parseList = parseList;
    }

    public List<String> getInjectList() {
        return injectList;
    }

    public void setInjectList(List<String> injectList) {
        this.injectList = injectList;
    }

    public List<String> getFetchList() {
        return fetchList;
    }

    public void setFetchList(List<String> fetchList) {
        this.fetchList = fetchList;
    }

    public List<String> getParseList() {
        return parseList;
    }

    public void setParseList(List<String> parseList) {
        this.parseList = parseList;
    }
}
