package indiv.dev.grad.hit.pro.crawl.test;

import indiv.dev.grad.hit.pro.mapper.CrawlDataMapper;
import indiv.dev.grad.hit.pro.model.TaskHistory;
import indiv.dev.grad.hit.pro.pojo.CrawlData;
import indiv.dev.grad.hit.pro.service.CrawlService;
import indiv.dev.grad.hit.pro.service.impl.CrawlServiceImpl;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-19 13:27
 */
public class TestCrawlFind {
    public static void main(String[] args) {
        CrawlService crawlService = new CrawlServiceImpl();
        List<TaskHistory> taskHistoryList = crawlService.getHistoryTask();
        for (TaskHistory taskHistory : taskHistoryList) {
            System.out.println(taskHistory);
        }
        SqlSession session = DbConnUtils.getSession().openSession();
        CrawlDataMapper crawlDataMapper = session.getMapper(CrawlDataMapper.class);
        CrawlData crawlData = crawlDataMapper.findAll().get(0);
        System.out.println(DateFormatUtils.format(
                DateFormatUtils.unix2current(crawlData.getUpdateTime()),
                DateFormatUtils.fullFormat3));
        session.close();
    }
}
