package indiv.dev.grad.hit.pro.service.impl;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.*;
import indiv.dev.grad.hit.pro.bootstrap.ConsumerFactory;
import indiv.dev.grad.hit.pro.constant.KafkaProperties;
import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.mapper.CrawlDataMapper;
import indiv.dev.grad.hit.pro.mapper.UsersMapper;
import indiv.dev.grad.hit.pro.model.TaskHistory;
import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.pojo.CrawlData;
import indiv.dev.grad.hit.pro.service.CrawlService;
import indiv.dev.grad.hit.pro.utils.BlockBuffer;
import indiv.dev.grad.hit.pro.utils.DateFormatUtils;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import indiv.dev.grad.hit.pro.utils.StringUtils;
import indiv.dev.grad.hit.pro.utils.kafka.Consumer;
import indiv.dev.grad.hit.pro.utils.logger.TKLogger;
import org.apache.commons.collections.buffer.BlockingBuffer;
import org.apache.ibatis.session.SqlSession;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.BlockingQueue;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-11 14:43
 */
public class CrawlServiceImpl implements CrawlService {
    private static final int INJECT_URL_NUM = 10;

    @Override
    public List<AppPerformance> getSequenceByJobName(String job) {
        SqlSession session = DbConnUtils.getSession().openSession();
        List<AppPerformance> appPerformanceList = null;
        try {
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            appPerformanceList = appPerformanceMapper.selectSeqByJob(job);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return appPerformanceList;
    }

    @Override
    public List<TaskHistory> getHistoryTask() {
        SqlSession session = DbConnUtils.getSession().openSession();
        UsersMapper usersMapper = session.getMapper(UsersMapper.class);
        CrawlDataMapper crawlDataMapper = session.getMapper(CrawlDataMapper.class);
        Map<String, String> name2level = new HashMap<String, String>();
        Map<String, String> name2Email = new HashMap<String, String>();
        List<String> fullNameList = crawlDataMapper.selectDistinctFullName();
        for (String fullName: fullNameList) {
            String userLevel = usersMapper.selectUsersByFullName(fullName).getUsersLevel().toString();
            String email = usersMapper.selectUsersByFullName(fullName).getEmailAddress();
            name2level.put(fullName, userLevel);
            name2Email.put(fullName, email);
        }

        List<CrawlData> crawlDataList = crawlDataMapper.findAll();
        List<TaskHistory> taskHistories = new ArrayList<TaskHistory>();
        for (CrawlData crawlData: crawlDataList) {
            taskHistories.add(new TaskHistory(crawlData.getId().toString(),
                    crawlData.getUsers(),
                    name2Email.get(crawlData.getUsers()),
                    name2level.get(crawlData.getUsers()),
                    crawlData.getTsql(),
                    DateFormatUtils.format(
                            DateFormatUtils.unix2current(crawlData.getUpdateTime()),
                            DateFormatUtils.fullFormat2),
                    crawlData.getIsFinished()));
        }
        session.close();
        return taskHistories;
    }

    @Override
    public void insertInfo(String user, String entity, String theme, String features, String urls) {
        SqlSession session = DbConnUtils.getSession().openSession();
        CrawlDataMapper crawlDataMapper = session.getMapper(CrawlDataMapper.class);
        try {
            String tsql = constructTsql(entity, theme, features, urls);
            crawlDataMapper.insertTsqlInfo(user, entity, theme, features, urls, tsql);
            session.commit();
        } catch (Exception e) {
            session.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }

    @Override
    public String getNotifications() {
        StringBuilder stringBuilder = new StringBuilder();
        Consumer consumer = ConsumerFactory.getConsumer();
        BlockBuffer<String> block = consumer.getBlock();
        while (block != null && !block.isEmpty()) {
            stringBuilder.append(block.fetch()).append("\n");
        }

        return stringBuilder.toString();
    }

    @Override
    public void updatePerformance() {
        Consumer consumer = ConsumerFactory.getConsumer(KafkaProperties.TOPIC3);
        BlockBuffer<String> block = consumer.getBlock();
        SqlSession session = DbConnUtils.getSession().openSession();
        while (block != null && !block.isEmpty()) {
            String sequeneces = block.fetch();
            if (sequeneces.length() <= 6) {
                continue;
            }
            String job = sequeneces.substring(0, 6);
            String obj = sequeneces.substring(6);
            AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
            appPerformanceMapper.insertByJobAndObj(job, obj);
            try {
                session.commit();
            } catch (Exception e) {
                session.rollback();
                e.printStackTrace();
            } finally {
                session.close();
            }

        }

        return;
    }

    @Override
    public String getRelations() {
        StringBuilder stringBuilder = new StringBuilder();
        Consumer consumer = ConsumerFactory.getConsumer(KafkaProperties.TOPIC2);
        BlockBuffer<String> block = consumer.getBlock();
        while (block != null && !block.isEmpty()) {
            stringBuilder.append(block.fetch()).append("\n");
        }

        return stringBuilder.toString();
    }

    @Override
    public List<String> getInjections(String entity, String theme, String features)  {
        List<String> injectUrls = new ArrayList<>();
        List<String> keywords = new ArrayList<>();
        keywords.add(entity + " " + theme);
        keywords.add(StringUtils.isEmpty(features)? " " : features);

        HtmlPage page = null;
        try {
            page = webExtractionFast(keywords);
            for (String str: urlExtract(page)) {
                if ("".equals(str) || str == null || str.isEmpty()) {
                    continue;
                }
                injectUrls.add(str);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return injectUrls;
    }

    private String constructTsql(String entity, String theme, String features, String urls) {
        StringBuilder stringBuilder = new StringBuilder();
        if (!StringUtils.isEmpty(features)) {
            stringBuilder.append("COLLECT ").append(entity)
                    .append(" FROM ").append("[").append(urls).append("] ")
                    .append("ABOUT ").append(theme)
                    .append(" WHERE ").append(features);
        } else {
            stringBuilder.append("COLLECT ").append(entity)
                    .append(" FROM ").append("[").append(urls).append("] ")
                    .append("ABOUT ").append(theme);
        }
        return stringBuilder.toString();
    }

    private HtmlPage webExtractionFast(List<String> keywords) throws Exception {
        List<String> webUrls = null;
        final String url = "http://www.baidu.com/gaoji/advanced.html";
        WebClient webClient = new WebClient();
        webClient.getOptions().setThrowExceptionOnFailingStatusCode(false);
        webClient.getOptions().setThrowExceptionOnScriptError(false);
        webClient.getOptions().setCssEnabled(false);
        webClient.getOptions().setJavaScriptEnabled(true);

        HtmlPage htmlPage = webClient.getPage(url);
        // 获取高级搜索控件
        HtmlForm form = htmlPage.getFormByName("f1");
        HtmlSubmitInput button = form.getInputByValue("百度一下");

        HtmlTextInput textField = form.getInputByName("q1");
        textField.setValueAttribute(keywords.get(0));
        HtmlTextInput textInput = form.getInputByName("q3");
        textInput.setValueAttribute(keywords.get(1));

        final HtmlSelect htmlSelect = form.getSelectByName("rn");
        htmlSelect.setDefaultValue("10");
        final HtmlHiddenInput hiddenInput = form.getInputByName("tn");
        hiddenInput.setDefaultValue("baiduadv");
        //发送请求
        final HtmlPage page = button.click();
        webClient.closeAllWindows();

        return page.getPage();
    }

    private List<String> urlExtract(HtmlPage result) {
        List<String> urls = new ArrayList<String>();
        try {
            for (int i = 1; i <= INJECT_URL_NUM; i++) {
                DomElement e = result.getElementById(String.valueOf(i));
                List<HtmlElement> elements = e.getElementsByTagName("a");
                for (HtmlElement element: elements) {
                    urls.add(getRealUrl(element.getAttribute("href")));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        HashSet<String> hashSet = new HashSet<String>(urls);
        urls.clear();
        urls.addAll(hashSet);
        if (urls.size() > INJECT_URL_NUM * 10) {
            urls = urls.subList(0, INJECT_URL_NUM * 10);
        }
        return urls;
    }

    private String getRealUrl(String url) {
        if (url.isEmpty() || !url.startsWith("http")) {
            return "";
        }

        Connection.Response res = null;
        int timeout = 60000;
        try {
            res = Jsoup.connect(url).timeout(timeout).method(Connection.Method.GET)
                    .followRedirects(false).execute();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return res.header("Location");
    }
}
