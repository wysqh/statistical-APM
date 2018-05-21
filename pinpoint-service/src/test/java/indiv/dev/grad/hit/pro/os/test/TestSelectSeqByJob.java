package indiv.dev.grad.hit.pro.os.test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import indiv.dev.grad.hit.pro.model.Track;
import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.service.impl.CrawlServiceImpl;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 18:23
 */
public class TestSelectSeqByJob {
    public static void main(String[] args) {
        CrawlServiceImpl crawlService = new CrawlServiceImpl();
        List<AppPerformance> list = crawlService.getSequenceByJobName("inject");
        for (AppPerformance a: list) {
//            System.out.println(a);
            Gson gson = new GsonBuilder().create();
            Track track = gson.fromJson(a.getObject(), Track.class);
            System.out.println(track);
        }
    }
}
