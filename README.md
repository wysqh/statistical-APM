#  statistical-APM

##  mybatis 数据库字段带下划线，映射支持java类属性驼峰命名

http://blog.csdn.net/valderfields1206/article/details/70314563

**在mybatis-config.xml文件里配置**

****

**<configuration>    <!-- 全局配置 -->    <settings>        <!--允许 JDBC 支持自动生成主键-->        <setting name="useGeneratedKeys" value="false"/>       <!--是否开启自动驼峰命名规则（camel case）映射，即从经典数据库列名 A_COLUMN 到经典 **

**Java 属性名 aColumn 的类似映射。 -->        <setting name="mapUnderscoreToCamelCase" value="true"/>    </settings></configuration>**



Google Gson

http://blog.csdn.net/lk_blog/article/details/7685190