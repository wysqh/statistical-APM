package indiv.dev.grad.hit.pro.test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import indiv.dev.grad.hit.pro.mapper.AppUriEffectiveMapper;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import indiv.dev.grad.hit.pro.model.MetaTrace;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class TestToJson {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();

        AppUriEffectiveMapper appUriEffectiveMapper = session.getMapper(AppUriEffectiveMapper.class);
        List<AppUriEffective> appUriEffectiveList = appUriEffectiveMapper.selectPerformanceByAppName("tuan-lbc-api");
        List<MetaTrace> metaTraceList = null;
        for (AppUriEffective appUriEffective: appUriEffectiveList) {
            if (appUriEffective.getSlow().equals("[]"))
                continue;
            //System.out.println(appUriEffective.getSlow());
            Gson gson = new GsonBuilder().create();
            metaTraceList = gson.fromJson(appUriEffective.getSlow(), new TypeToken<List<MetaTrace>>(){
            }.getType());
            System.out.println(appUriEffective.getSlow());
            for (MetaTrace metaTrace : metaTraceList) {
                System.out.println(metaTrace.getAgentId() + ","
                        + metaTrace.getApplication() + ","
                        + metaTrace.getRpc() + ","
                        + metaTrace.getRemoteAddr() + ","
                        + metaTrace.getEndpoint());
            }
        }
    }
}
