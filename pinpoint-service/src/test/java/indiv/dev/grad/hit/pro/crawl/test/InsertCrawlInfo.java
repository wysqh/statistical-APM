package indiv.dev.grad.hit.pro.crawl.test;

import indiv.dev.grad.hit.pro.mapper.CrawlDataMapper;
import indiv.dev.grad.hit.pro.service.CrawlService;
import indiv.dev.grad.hit.pro.service.impl.CrawlServiceImpl;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.StringUtils;
import org.apache.ibatis.session.SqlSession;

import java.io.UnsupportedEncodingException;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-18 20:48
 */
public class InsertCrawlInfo {
    public static void main(String[] args) throws UnsupportedEncodingException {
        CrawlService crawlService = new CrawlServiceImpl();
//        crawlService.insertInfo("gutiankai", "entity", "theme",
//                "features", "www.baidu.com");
        String _entity = StringUtils.zhCompatible("tt");
        String _theme = StringUtils.zhCompatible("tt");
        System.out.println(_entity);
    }
}
