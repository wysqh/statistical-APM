package indiv.dev.grad.hit.pro.controller;

import indiv.dev.grad.hit.pro.exceptions.TestException;
import indiv.dev.grad.hit.pro.util.DateFormatUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
public class TestController {
    static final Logger logger = LoggerFactory.getLogger(TestController.class);
    /**
     * 不需要登陆的url的token值
     */
    String token = "NjlkMmYxZjY1ODUwNTRhZjJiNmQ0YWUwODFjYWRmNzY=";

    @RequestMapping(value = "/admin")
    @ResponseBody
    public String testSpring() {
        return "Hello, SpringMVC";
    }

    @RequestMapping(value = "/exceptions")
    @ResponseBody
    public String testExceptions() {
        throw new TestException();
    }

    @RequestMapping(value = "/testToken")
    @ResponseBody
    public String testString(String token) {
        if (this.token != token) {
            return "error";
        }

        return "success";
    }

    @RequestMapping("/remindExpiredTotal")
    @ResponseBody
    public Map<String, Date> remindExpiredTotal() {
        Map<String, Date> rtVals = new HashMap<String, Date>();

        String dateFormat = "yyyy-MM-dd";
        Long millSec = 24 * 60 * 60 * 1000L;
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat(dateFormat);
        Date fifteenDaysLater = null;
        Date startTime = null;
        try {
            startTime = DateFormatUtils.getDateFromString(dateFormat, "1970-01-01");
            fifteenDaysLater = DateFormatUtils.getDateFromString(dateFormat, df.format(new Date(date.getTime()
            +  15 * millSec)));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        logger.info("testTime: " + startTime);
        logger.info("testTime: " + fifteenDaysLater);

        rtVals.put("startTime", startTime);
        rtVals.put("fifteenDaysLater", fifteenDaysLater);
        return rtVals;
    }
}