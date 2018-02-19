package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.AppUriEffectiveExample;
import indiv.dev.grad.hit.pro.model.chart.PieEChartsModel;
import indiv.dev.grad.hit.pro.model.chart.VN;
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

    List<AppUriEffective> selectPerformanceByAppName(@Param("appName") String appName);

    List<AppUriEffective> selectExceptionsByAppName(@Param("appName") String appName);

    List<AppUriEffective> selectSlowsByAppName(@Param("appName") String appName);

    List<AppUriEffective> selectAppEffectives();

    List<AppUriEffective> selectAppEffectivesWithLimit(@Param("limits")Integer limits);

    List<AppUriEffective> selectAppUriEffectiveByConditions(@Param("appName")String appName, @Param("start")Long start, @Param("end")Long end);

    List<VN<Integer, String>> selectEPieDataByCondition(@Param("start")Long start, @Param("end")Long end);

    Integer selectRequestByLong(@Param("start")Long start, @Param("end")Long end);

    int selectTotalCount();

    AppUriEffective selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AppUriEffective record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveExample example);

    int updateByExample(@Param("record") AppUriEffective record, @Param("indiv/dev/grad/hit/pro/example") AppUriEffectiveExample example);

    int updateByPrimaryKeySelective(AppUriEffective record);

    int updateByPrimaryKey(AppUriEffective record);
}