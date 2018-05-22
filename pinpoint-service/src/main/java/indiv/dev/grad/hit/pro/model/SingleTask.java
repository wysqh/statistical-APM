package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-22 14:02
 */
public class SingleTask implements Serializable {
    private List<String> injectList;
    private List<String> generateList;
    private List<String> fetchList;
    private List<String> parseList;
    private List<String> labels;

    public SingleTask() {

    }

    public SingleTask(List<String> injectList, List<String> generateList, List<String> fetchList, List<String> parseList, List<String> labels) {
        this.injectList = injectList;
        this.generateList = generateList;
        this.fetchList = fetchList;
        this.parseList = parseList;
        this.labels = labels;
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

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    @Override
    public String toString() {
        return "SingleTask{" +
                "injectList=" + injectList +
                ", generateList=" + generateList +
                ", fetchList=" + fetchList +
                ", parseList=" + parseList +
                ", labels=" + labels +
                '}';
    }
}
