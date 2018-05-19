package indiv.dev.grad.hit.pro.service;

import indiv.dev.grad.hit.pro.model.TaskHistory;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-11 14:43
 */
public interface CrawlService {
    String getNotifications();
    String getRelations();
    List<String> getInjections(String entity, String theme, String features);
    void insertInfo(String user, String entity, String theme, String features, String urls);
    List<TaskHistory> getHistoryTask();
}
