package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.pojo.CrawlData;
import indiv.dev.grad.hit.pro.example.CrawlDataExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CrawlDataMapper {
    int countByExample(CrawlDataExample example);

    int deleteByExample(CrawlDataExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(CrawlData record);

    int insertSelective(CrawlData record);

    List<CrawlData> selectByExample(CrawlDataExample example);

    CrawlData selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") CrawlData record, @Param("example") CrawlDataExample example);

    int updateByExample(@Param("record") CrawlData record, @Param("example") CrawlDataExample example);

    int updateByPrimaryKeySelective(CrawlData record);

    int updateByPrimaryKey(CrawlData record);

    void insertTsqlInfo(@Param("users") String users, @Param("entity")String entity, @Param("theme") String theme,
                        @Param("features") String features, @Param("urls") String urls, @Param("tsql") String tsql);

    List<CrawlData> findAll();

    List<String> selectDistinctFullName();
}