package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.service.CrawlService;
import indiv.dev.grad.hit.pro.util.BaseObjectResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-12 15:48
 */
@Controller
@RequestMapping("/api")
public class CrawlController {
    private static final Logger logger = LoggerFactory.getLogger(CrawlController.class);

    @Autowired
    private CrawlService crawlService;

    @RequestMapping(value = "/crawl/notice", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<String> getNotice() {
        BaseObjectResult<String> baseObjectResult = new BaseObjectResult<String>();
        String notice = crawlService.getNotifications();
        baseObjectResult.setContent(notice, "success");
        return baseObjectResult;
    }

    @RequestMapping(value = "/crawl/injectUrls", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<String>> getInjections(@RequestParam(value = "entity")String entity,
                                                        @RequestParam(value = "theme")String theme,
                                                        @RequestParam(value = "features", required = false)String features) {
        BaseObjectResult<List<String>> baseObjectResult = new BaseObjectResult<List<String>>();
        List<String> urls = crawlService.getInjections(entity, theme, features);
        baseObjectResult.setContent(urls, "success");

        return baseObjectResult;
    }
}
