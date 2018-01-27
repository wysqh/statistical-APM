package indiv.dev.grad.hit.pro.bootstrap;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;

public class Provider {
    public static void main(String[] args) {
        System.out.println("程序开始");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"provider.xml"});
        try {
            context.start();
        }catch (Exception e){
            e.printStackTrace();
        }
        System.out.println("服务方开始服务");
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


