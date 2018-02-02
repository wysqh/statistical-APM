package indiv.dev.grad.hit.pro.test;

import indiv.dev.grad.hit.pro.mapper.AppAdministratorMapper;
import indiv.dev.grad.hit.pro.pojo.AppAdministrator;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-02 19:14
 */
public class TestSimiliar {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        AppAdministratorMapper appAdministratorMapper = session.getMapper(AppAdministratorMapper.class);
        List<String> lists = appAdministratorMapper.selectAppsBySimilar("api");

        for (String string: lists) {
            System.out.println(string);
        }
    }
}
