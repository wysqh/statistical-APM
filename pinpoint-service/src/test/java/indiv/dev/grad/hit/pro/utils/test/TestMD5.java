package indiv.dev.grad.hit.pro.utils.test;

import indiv.dev.grad.hit.pro.utils.MD5Utils;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-17 3:48
 */
public class TestMD5 {
    public static void main(String[] args) {
        // 测试方法
        String pwd = "123456";
        System.out.println("加密前： " + pwd);
        System.err.println("加密后： " + MD5Utils.getMD5(pwd));
    }
}
