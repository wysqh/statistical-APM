package indiv.dev.grad.hit.pro.controller.api;

import indiv.dev.grad.hit.pro.service.ZkService;
import indiv.dev.grad.hit.pro.util.BaseObjectResult;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-27 11:21
 */
@Controller
@RequestMapping("/api")
public class ZkController {
    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(ZkController.class);

    @Autowired
    private ZkService zkService;

    @RequestMapping(value = "/zk/child", method = RequestMethod.GET)
    @ResponseBody
    public BaseObjectResult<List<String>> getContentInNode(@RequestParam("path") String path) {
        BaseObjectResult<List<String>> baseObjectResult = new BaseObjectResult<List<String>>();
        baseObjectResult.setContent(zkService.getListInNode(path), "success");
        return baseObjectResult;
    }
}
