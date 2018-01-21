package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.WhiteListExample;
import indiv.dev.grad.hit.pro.pojo.WhiteList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface WhiteListMapper {
    int countByExample(WhiteListExample example);

    int deleteByExample(WhiteListExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WhiteList record);

    int insertSelective(WhiteList record);

    List<WhiteList> selectByExample(WhiteListExample example);

    WhiteList selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WhiteList record, @Param("indiv/dev/grad/hit/pro/example") WhiteListExample example);

    int updateByExample(@Param("record") WhiteList record, @Param("indiv/dev/grad/hit/pro/example") WhiteListExample example);

    int updateByPrimaryKeySelective(WhiteList record);

    int updateByPrimaryKey(WhiteList record);
}