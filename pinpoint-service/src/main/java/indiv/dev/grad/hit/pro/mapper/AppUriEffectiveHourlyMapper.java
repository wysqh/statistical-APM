package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.AppUriEffectiveHourlyExample;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveHourly;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AppUriEffectiveHourlyMapper {
    int countByExample(AppUriEffectiveHourlyExample example);

    int deleteByExample(AppUriEffectiveHourlyExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(AppUriEffectiveHourly record);

    int insertSelective(AppUriEffectiveHourly record);

    List<AppUriEffectiveHourly> selectByExample(AppUriEffectiveHourlyExample example);

    AppUriEffectiveHourly selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AppUriEffectiveHourly record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveHourlyExample example);

    int updateByExample(@Param("record") AppUriEffectiveHourly record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveHourlyExample example);

    int updateByPrimaryKeySelective(AppUriEffectiveHourly record);

    int updateByPrimaryKey(AppUriEffectiveHourly record);
}