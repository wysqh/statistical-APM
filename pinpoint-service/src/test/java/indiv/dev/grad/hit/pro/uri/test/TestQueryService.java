package indiv.dev.grad.hit.pro.uri.test;

import indiv.dev.grad.hit.pro.service.ModuleUriCheckService;
import indiv.dev.grad.hit.pro.service.impl.ModuleUriCheckServiceImpl;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-13 19:26
 */
public class TestQueryService {
    public static void main(String[] args) {
        ModuleUriCheckService moduleUriCheckService = new ModuleUriCheckServiceImpl();
        System.out.println(moduleUriCheckService.getUriPerformanceByQuery("sc-cert-create"
        ,"20170419","/servicecenter/cert/create").size());
    }
}
