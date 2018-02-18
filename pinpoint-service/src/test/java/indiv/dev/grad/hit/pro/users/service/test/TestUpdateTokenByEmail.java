package indiv.dev.grad.hit.pro.users.service.test;

import indiv.dev.grad.hit.pro.mapper.UsersMapper;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 15:48
 */
public class TestUpdateTokenByEmail {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        UsersMapper usersMapper = session.getMapper(UsersMapper.class);
        String token = "32";
        String email = "gutiankai@baidu.com";
        Integer i = usersMapper.updateTokenByEmail(token, email);
        session.commit();
        session.close();
        System.out.println(i);
    }
}
