package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.TaskPoolExample;
import indiv.dev.grad.hit.pro.pojo.TaskPool;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TaskPoolMapper {
    int countByExample(TaskPoolExample example);

    int deleteByExample(TaskPoolExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TaskPool record);

    int insertSelective(TaskPool record);

    List<TaskPool> selectByExampleWithBLOBs(TaskPoolExample example);

    List<TaskPool> selectByExample(TaskPoolExample example);

    TaskPool selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TaskPool record, @Param("indiv/dev/grad/hit/pro/example") TaskPoolExample example);

    int updateByExampleWithBLOBs(@Param("record") TaskPool record, @Param("indiv/dev/grad/hit/pro/example") TaskPoolExample example);

    int updateByExample(@Param("record") TaskPool record, @Param("indiv/dev/grad/hit/pro/example") TaskPoolExample example);

    int updateByPrimaryKeySelective(TaskPool record);

    int updateByPrimaryKeyWithBLOBs(TaskPool record);

    int updateByPrimaryKey(TaskPool record);
}