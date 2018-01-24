package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.AppAdministratorExample;
import indiv.dev.grad.hit.pro.pojo.AppAdministrator;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AppAdministratorMapper {
    int countByExample(AppAdministratorExample example);

    int deleteByExample(AppAdministratorExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(AppAdministrator record);

    int insertSelective(AppAdministrator record);

    List<AppAdministrator> selectByExample(AppAdministratorExample example);

    AppAdministrator selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AppAdministrator record, @Param("indiv/dev/grad/hit/pro/example") AppAdministratorExample example);

    int updateByExample(@Param("record") AppAdministrator record, @Param("indiv/dev/grad/hit/pro/example") AppAdministratorExample example);

    String selectApplicationById(@Param("id") Integer id);

    int updateByPrimaryKeySelective(AppAdministrator record);

    int updateByPrimaryKey(AppAdministrator record);
}