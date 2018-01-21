package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.AppUriEffectiveDailyExample;
import indiv.dev.grad.hit.pro.pojo.AppUriEffectiveDaily;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AppUriEffectiveDailyMapper {
    int countByExample(AppUriEffectiveDailyExample example);

    int deleteByExample(AppUriEffectiveDailyExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(AppUriEffectiveDaily record);

    int insertSelective(AppUriEffectiveDaily record);

    List<AppUriEffectiveDaily> selectByExample(AppUriEffectiveDailyExample example);

    AppUriEffectiveDaily selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AppUriEffectiveDaily record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveDailyExample example);

    int updateByExample(@Param("record") AppUriEffectiveDaily record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveDailyExample example);

    int updateByPrimaryKeySelective(AppUriEffectiveDaily record);

    int updateByPrimaryKey(AppUriEffectiveDaily record);
}