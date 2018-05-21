package indiv.dev.grad.hit.pro.model;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 21:41
 */
public class Sequence implements Serializable {
    private String name;
    private List<String> lists;

    public Sequence() {

    }

    public Sequence(String name, List<String> lists) {
        this.name = name;
        this.lists = lists;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getLists() {
        return lists;
    }

    public void setLists(List<String> lists) {
        this.lists = lists;
    }
}
