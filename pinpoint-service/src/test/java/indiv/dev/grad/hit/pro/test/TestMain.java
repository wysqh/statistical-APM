package indiv.dev.grad.hit.pro.test;

import indiv.dev.grad.hit.pro.mapper.TaskPoolMapper;
import indiv.dev.grad.hit.pro.pojo.TaskPool;
import indiv.dev.grad.hit.pro.example.TaskPoolExample;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;


import java.io.Reader;
import java.util.List;

public class TestMain {
    private static SqlSessionFactory sqlSessionFactory;
    private static Reader reader;

    static {
        try {
            reader = Resources.getResourceAsReader("mybatis-conf.xml");
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static SqlSessionFactory getSession() {
        return sqlSessionFactory;
    }

    public static void main(String[] args) {
        SqlSession session = getSession().openSession();
        try {
            TaskPool taskPool = (TaskPool) session.selectOne("indiv.dev.grad.hit.pro.mapper.TaskPoolMapper.selectByPrimaryKey", 383357424);
            TaskPoolExample taskPoolExample = new TaskPoolExample();
            TaskPoolExample.Criteria criteria = taskPoolExample.createCriteria();
            criteria.andIdEqualTo(453329755);
            taskPoolExample.or(taskPoolExample.createCriteria().andIdEqualTo(453329756));
            List<TaskPool> taskPoolsList = session.getMapper(TaskPoolMapper.class).selectByExample(taskPoolExample);
            System.out.println(taskPool.getTaskParams());
            for (TaskPool taskPool1: taskPoolsList) {
                System.out.println(taskPool1.getTaskHandler());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        session.close();;
    }
}
