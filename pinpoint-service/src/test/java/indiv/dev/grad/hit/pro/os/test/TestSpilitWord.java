package indiv.dev.grad.hit.pro.os.test;

import indiv.dev.grad.hit.pro.mapper.AppPerformanceMapper;
import indiv.dev.grad.hit.pro.service.CrawlService;
import indiv.dev.grad.hit.pro.service.impl.CrawlServiceImpl;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 14:22
 */
public class TestSpilitWord {
    public static void main(String[] args) {
        String str = "inject{\"currentTime\":\"2018-05-21T14:14:21\",\"processCPU\":\"0.000\",\"appCPU\":\"0.000\",\"userPortion\":\"0.000\",\"sysPortion\":\"0.000\",\"OtherCPU\":\"0.000\",\"theadCount\":\"27\",\"gcTime\":\"0.000\",\"youngGc\":\"0.000\",\"oldGc\":\"0.000\",\"heapAllocationRate\":\"492k\",\"tables\":[{\"id\":\"1\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"main\"},{\"id\":\"2\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"Reference Handler\"},{\"id\":\"3\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"Finalizer\"},{\"id\":\"4\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"Signal Dispatcher\"},{\"id\":\"5\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"Attach Listener\"},{\"id\":\"6\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"Monitor Ctrl-Break\"},{\"id\":\"13\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"63\",\"name\":\"New I/O server boss #1 ([id: 0x64ec96c6, /0:0:0:0:0:0:0:0:20880])\"},{\"id\":\"14\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"dubbo-remoting-server-heartbeat-thread-1\"},{\"id\":\"15\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"6\",\"name\":\"DubboRegistryFailedRetryTimer-thread-1\"},{\"id\":\"16\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"ZkClient-EventThread-16-127.0.0.1:2181\"},{\"id\":\"17\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"4626\",\"name\":\"main-SendThread(127.0.0.1:2181)\"},{\"id\":\"18\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"main-EventThread\"},{\"id\":\"19\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"DubboServerHandler-192.168.174.1:20880-thread-1\"},{\"id\":\"20\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"78\",\"name\":\"New I/O server worker #1-1\"},{\"id\":\"21\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"DubboSaveRegistryCache-thread-1\"},{\"id\":\"22\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"13k\",\"name\":\"main-SendThread(127.0.0.1:2181)\"},{\"id\":\"23\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"0\",\"name\":\"main-EventThread\"},{\"id\":\"24\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"34k\",\"name\":\"Thread-1\"},{\"id\":\"26\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"34k\",\"name\":\"Thread-3\"},{\"id\":\"27\",\"userT\":\"0.00\",\"sysT\":\"0.0\",\"allocRate\":\"1727\",\"name\":\"kafka-coordinator-heartbeat-thread | apmConsumer\"}]}";
        String name = str.substring(0, 6);
        String end = str.substring(6);
        SqlSession session = DbConnUtils.getSession().openSession();
        AppPerformanceMapper appPerformanceMapper = session.getMapper(AppPerformanceMapper.class);
        appPerformanceMapper.insertByJobAndObj(name, end);
        session.commit();
        System.out.println(name);
        System.out.println(end);
    }
}
