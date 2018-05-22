package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.pojo.AppPerformance;
import indiv.dev.grad.hit.pro.example.AppPerformanceExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AppPerformanceMapper {
    int countByExample(AppPerformanceExample example);

    int deleteByExample(AppPerformanceExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(AppPerformance record);

    int insertSelective(AppPerformance record);

    List<AppPerformance> selectByExample(AppPerformanceExample example);

    AppPerformance selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AppPerformance record, @Param("example") AppPerformanceExample example);

    int updateByExample(@Param("record") AppPerformance record, @Param("example") AppPerformanceExample example);

    int updateByPrimaryKeySelective(AppPerformance record);

    int updateByPrimaryKey(AppPerformance record);

    void insertByJobAndObj(@Param("job") String job, @Param("object") String obj);

    List<AppPerformance> selectSeqByJob(@Param("jobName") String jobName);

    List<AppPerformance> selectLatestSevenSeq();

    List<AppPerformance> selectLatestSeqByJob(@Param("jobName") String jobName);

    AppPerformance selectMostLatestByJob(@Param("jobName") String jobName);

    List<AppPerformance> selectLatestInTenByJob(@Param("jobName") String jobName);

    Integer selectRequestByLong(@Param("start") String start, @Param("end") String end);
}