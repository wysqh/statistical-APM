statistical-APM

环境：java6+zookeeper(3.4.10)+dubbo(2.5.6)

备注：此份配置示例针对Windows操作系统，MAC OS大部分应该是类似的（所有的cmd均使用对应的sh执行即可）

 

**一：启动Zookeeper**

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

 

**二：启动pinpoint-serviceBootstrap下的provider.java**

当出现以下内容时注册成功

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg)

(p.s. In Executor：Connection Established 可能看不到，此时需要把之前关闭的log4j配置文件打开，

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg)

 

**三：当完成以上步骤时，基于Dubbo的服务端已经成功注册到Zookeeper上。接下来，将前端代码部署到pinpoint-web中**

注意：此时需要单机已有相应的Node、Npm和Anguar CLi环境

3.0  查看当前单机是否当前环境。在CMD中分别键入以下命令

**Node:node -v  (https://nodejs.org/zh-cn/)**

**Npm:npm -v**

**Angularcli: ng -v  (https://github.com/angular/angular-cli/wiki)**

 

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image009.png)

 

3.1． 进入terminal窗口，切换当前目录至statistical-web

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image011.jpg)

 

3.2 将pinpoint-web\web\statistical-web下的前端代码部署到pinpoint-controller 下

​       键入命令: ng build. 该命令将会将前端代码部署到指定(.angular-cli.json中的outDir指定)目录下。 

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image013.jpg)

 

a):

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image015.jpg)

 

b): 编译完成后，会出现以下界面

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image017.jpg)

此时，在pinpoint-controller\src\main\webapp下，会出现部署好的目录dist

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image018.png)

 

c. 进入dist目录，找到index.html 切换映射地址

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image020.jpg)

 

**四： 启动Tomcat**

​       启动tomcat，将dist打成war包

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg)

测试URL:localhost:8080/api/getAllApplications

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image024.jpg)

["-sc-cert-create-prev","a-sc-cert-query-prev","acrm-server","acrm-ztc-ws","agree-dep-service","balance-server","bp-poi-na-web","bp-poi-server","capital-receiver","cert-public-api","common-poi-server","crm-dubbo","crm-http","crm-server","data-cube-web","ep-dubbo","fin-api-web","fss-agreement-web","fss-detail-server","fss-merchant-na-web","fss-merchant-web","image-server","KM-TEST","libra-webapp","mct-acl-web","mct-bdc-na","mct-bdc-web","mct-center-api","mct-center-web","mct-comment-web","mct-oprecord-search","message-comet","message-core","message-recevie","message-web","mkt-kingmeal","nas-api","niux-poi-api","niux-poi-web","niux-support","niux-support-ext","npc-dubbo","nuomi-bdc-dispatcher","nuomi-bdc-handler","nuomi-common-server","oc-dubbo","oc-web","order-server","order-web","payment-server","payment-web","pc-server","pc-web","poi-access-api","poi-na-web","poi-relation-api","qrcode-server","sale-app-api","sale-service-dubbo","sale-service-server","saler-visit-dubbo","saler-visit-web","sc-api","sc-cert-consumer","sc-cert-create","sc-cert-query","sc-cert-refund","sc-file","sc-mct-na","sc-mct-web","sc-poi-pc-web","sc-quartz","sc-server","sc-web","settlement-server","supplier-api","supplier-web","tkc-api","tuan-cert-make2","tuan-lbc-api","tuan-lbc-server","tuan-lbc-web","tuan-mct-web","tuan-shoppay-make","tuan-verify-nuomi","tuan-verify-web","va-mkt-kingmeal-prev","weblab-server"]

当成功返回时，所有的环境已经全部打通。 

 

4.1 进入首页

<http://localhost:8080/dist/>

 

用户：[root@baidu.com](mailto:root@baidu.com)

密码：123456

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image026.jpg)

（p.s. Light– Custom 之间切换调色，建议Light）

 

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image028.jpg)

进入该界面后，其他的操作和当前线上操作完全一致

p.s. 自测时，所有数据和当前线上展示的数据完全一致，三个界面均没有出现数据不一致的问题，也能链接进入孔明调用链展示页面。

 

 

 

**五：后续迭代内容 图形化展示**

![img](file:///C:/Users/gutia/AppData/Local/Temp/msohtmlclip1/01/clip_image030.jpg)



**六：Reference**

------

- mybatis 数据库字段带下划线，映射支持java类属性驼峰命名

  http://blog.csdn.net/valderfields1206/article/details/70314563

------

- Google Gson

  http://blog.csdn.net/lk_blog/article/details/7685190

------

- SpringMVC 整合 Angular 2.0

  http://blog.sina.com.cn/s/blog_537517170102x7qc.html

------

- myBatis 传递多参数

  http://blog.csdn.net/Victor_Cindy1/article/details/50195545

------

- ng2 响应式表单

  http://www.jb51.net/article/116220.htm
  
------

- Nebular Document

  https://akveo.github.io/nebular/#/docs/getting-started/what-is-nebular

------

- MD5 加密

  http://blog.csdn.net/wf1154439/article/details/44619535

