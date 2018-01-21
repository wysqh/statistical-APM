package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.AppUriIssueExample;
import indiv.dev.grad.hit.pro.pojo.AppUriIssue;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AppUriIssueMapper {
    int countByExample(AppUriIssueExample example);

    int deleteByExample(AppUriIssueExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(AppUriIssue record);

    int insertSelective(AppUriIssue record);

    List<AppUriIssue> selectByExample(AppUriIssueExample example);

    AppUriIssue selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AppUriIssue record, @Param("indiv/dev/grad/hit/pro/example") AppUriIssueExample example);

    int updateByExample(@Param("record") AppUriIssue record, @Param("indiv/dev/grad/hit/pro/example") AppUriIssueExample example);

    int updateByPrimaryKeySelective(AppUriIssue record);

    int updateByPrimaryKey(AppUriIssue record);
}