package indiv.dev.grad.hit.pro.service.impl;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.*;
import indiv.dev.grad.hit.pro.bootstrap.ConsumerFactory;
import indiv.dev.grad.hit.pro.constant.KafkaProperties;
import indiv.dev.grad.hit.pro.service.CrawlService;
import indiv.dev.grad.hit.pro.utils.BlockBuffer;
import indiv.dev.grad.hit.pro.utils.StringUtils;
import indiv.dev.grad.hit.pro.utils.kafka.Consumer;
import indiv.dev.grad.hit.pro.utils.logger.TKLogger;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-11 14:43
 */
public class CrawlServiceImpl implements CrawlService {
    private static final int INJECT_URL_NUM = 10;

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
