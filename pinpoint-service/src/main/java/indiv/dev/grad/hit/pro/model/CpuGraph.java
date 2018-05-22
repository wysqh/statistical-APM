package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 13:00
 */
public class CpuGraph implements Serializable {
    private List<String> injectList;
    private List<String> generateList;
    private List<String> fetchList;
    private List<String> parseList;

    public CpuGraph() {

    }

    public CpuGraph(List<String> injectList, List<String> generateList, List<String> fetchList, List<String> parseList) {
        this.injectList = injectList;
        this.generateList = generateList;
        this.fetchList = fetchList;
        this.parseList = parseList;
    }

    public List<String> getInjectList() {
        return injectList;
    }

    public void setInjectList(List<String> injectList) {
        this.injectList = injectList;
    }

    public List<String> getGenerateList() {
        return generateList;
    }

    public void setGenerateList(List<String> generateList) {
        this.generateList = generateList;
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

    @Override
    public String
    toString() {
        return "CpuGraph{" +
                "injectList=" + injectList +
                ", generateList=" + generateList +
                ", fetchList=" + fetchList +
                ", parseList=" + parseList +
                '}';
    }
}
