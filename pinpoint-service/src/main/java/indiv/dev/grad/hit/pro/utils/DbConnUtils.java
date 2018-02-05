package indiv.dev.grad.hit.pro.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.Reader;

public class DbConnUtils {
    private static SqlSessionFactory sqlSessionFactory = null;
    private static Reader reader = null;

    /*
        多线程单例
     */
    public static SqlSessionFactory getSession() {
       if (sqlSessionFactory == null) {
           synchronized (SqlSessionFactory.class) {
               if (sqlSessionFactory == null) {
                       if (reader == null) {
                           try {
                               reader = Resources.getResourceAsReader("mybatis-conf.xml");
                           }
                           catch (Exception e) {
                               e.printStackTrace();
                           }
                       }
                       sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
                   }
           }
       }

       return sqlSessionFactory;
    }
}
