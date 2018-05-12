package indiv.dev.grad.hit.pro.service;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-11 14:43
 */
public interface CrawlService {
    String getNotifications();
    List<String> getInjections(String entity, String theme, String features);
}
