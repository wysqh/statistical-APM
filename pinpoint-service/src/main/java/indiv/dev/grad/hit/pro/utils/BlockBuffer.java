package indiv.dev.grad.hit.pro.utils;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-12 13:38
 */
public class BlockBuffer<T> {
    private LinkedList<T> buffer;

    public BlockBuffer() {
        buffer = new LinkedList<T>();
    }

    public boolean isEmpty() {
        boolean isEmpty = true;
        if (buffer.size() != 0 && buffer.getFirst() != null) {
            isEmpty = false;
        }

        return isEmpty;
    }

    public T fetch() {
        T ref = buffer.getFirst();
        buffer.removeFirst();
        return ref;
    }

    public void add(T message) {
        buffer.addLast(message);
    }
}
