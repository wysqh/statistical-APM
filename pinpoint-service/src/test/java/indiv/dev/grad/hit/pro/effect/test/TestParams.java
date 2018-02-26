package indiv.dev.grad.hit.pro.effect.test;

import indiv.dev.grad.hit.pro.service.impl.ModulePerformanceServiceImpl;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-26 13:52
 */
public class TestParams {
    public static void main(String[] args) {
        String str = " [{\"traceId\":\"3134^1504022022176^1153835\",\"collectorAcceptTime\":\"1516195353168\",\"startTime\":\"1516195348130\",\"elapsed\":\"5038\",\"application\":\"poi-access-api\",\"agentId\":\"3134\",\"endpoint\":\"nuomi-b-java-poi-access-api.orp.baidu.com:80\",\"exception\":\"1\",\"remoteAddr\":\"10.205.25.16\",\"rpc\":\"\\/access\\/niux_access\"},{\"traceId\":\"3134^1504022022176^1153836\",\"collectorAcceptTime\":\"1516195364827\",\"startTime\":\"1516195359789\",\"elapsed\":\"5038\",\"application\":\"poi-access-api\",\"agentId\":\"3134\",\"endpoint\":\"nuomi-b-java-poi-access-api.orp.baidu.com:80\",\"exception\":\"1\",\"remoteAddr\":\"10.205.25.57\",\"rpc\":\"\\/access\\/niux_access\"},{\"traceId\":\"3134^1504022022176^1153833\",\"collectorAcceptTime\":\"1516195263408\",\"startTime\":\"1516195258373\",\"elapsed\":\"5035\",\"application\":\"poi-access-api\",\"agentId\":\"3134\",\"endpoint\":\"nuomi-b-java-poi-access-api.orp.baidu.com:80\",\"exception\":\"1\",\"remoteAddr\":\"10.205.25.56\",\"rpc\":\"\\/access\\/niux_access\"}]";
        ModulePerformanceServiceImpl modulePerformanceService = new ModulePerformanceServiceImpl();
        Integer i = modulePerformanceService.matchByKeyWord(str, "traceId");
        System.out.println();
    }
}
