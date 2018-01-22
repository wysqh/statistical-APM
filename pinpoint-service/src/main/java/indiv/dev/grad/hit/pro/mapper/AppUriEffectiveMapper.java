package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.AppUriEffectiveExample;
import indiv.dev.grad.hit.pro.pojo.AppUriEffective;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface AppUriEffectiveMapper {
    int countByExample(AppUriEffectiveExample example);

    int deleteByExample(AppUriEffectiveExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(AppUriEffective record);

    int insertSelective(AppUriEffective record);

    List<AppUriEffective> selectByExample(AppUriEffectiveExample example);

    List<String> selectApplication();

    AppUriEffective selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AppUriEffective record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveExample example);

    int updateByExample(@Param("record") AppUriEffective record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveExample example);

    int updateByPrimaryKeySelective(AppUriEffective record);

    int updateByPrimaryKey(AppUriEffective record);
}