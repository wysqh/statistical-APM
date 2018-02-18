package indiv.dev.grad.hit.pro.users.service.test;

import indiv.dev.grad.hit.pro.mapper.UsersMapper;
import indiv.dev.grad.hit.pro.pojo.Users;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 16:09
 */
public class TestSelectUsersByEmail {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        String email = "gutiankai@baidu.com";
        UsersMapper usersMapper = session.getMapper(UsersMapper.class);
        Users users = usersMapper.selectUsersByEmail(email);
        System.out.println(users.getFullName()+ " ," + users.getUserDesc());
    }
}
