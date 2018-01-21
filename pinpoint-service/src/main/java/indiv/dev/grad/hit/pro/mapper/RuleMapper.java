package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.example.RuleExample;
import indiv.dev.grad.hit.pro.pojo.Rule;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RuleMapper {
    int countByExample(RuleExample example);

    int deleteByExample(RuleExample example);

    int insert(Rule record);

    int insertSelective(Rule record);

    List<Rule> selectByExample(RuleExample example);

    int updateByExampleSelective(@Param("record") Rule record, @Param("indiv/dev/grad/hit/pro/example") RuleExample example);

    int updateByExample(@Param("record") Rule record, @Param("indiv/dev/grad/hit/pro/example") RuleExample example);
}