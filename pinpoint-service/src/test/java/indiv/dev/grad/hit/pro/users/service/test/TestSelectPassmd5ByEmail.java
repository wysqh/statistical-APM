package indiv.dev.grad.hit.pro.users.service.test;

import indiv.dev.grad.hit.pro.mapper.UsersMapper;
import indiv.dev.grad.hit.pro.utils.DbConnUtils;
import org.apache.ibatis.session.SqlSession;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 15:43
 */
public class TestSelectPassmd5ByEmail {
    public static void main(String[] args) {
        SqlSession session = DbConnUtils.getSession().openSession();
        UsersMapper usersMapper = session.getMapper(UsersMapper.class);
        String email  = "gutiankai@baidu.com";
        String passmd5 = usersMapper.selectPassMd5ByEmail(email);
        System.out.println(passmd5);
    }
}
