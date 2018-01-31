package indiv.dev.grad.hit.pro.controller.advice;

import indiv.dev.grad.hit.pro.util.BaseObjectResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.ParseException;

//
//@ControllerAdvice
//public class GlobalExceptionHandler {
//    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
//
//    /**
//     * @ExceptionHandler: 全局处理异常方法
//     * @param e
//     * @return
//     */
//    @ExceptionHandler({Exception.class})
//    @ResponseBody
//    public BaseObjectResult<String> handleExceptions(Exception e) {
//        logger.error(e.getMessage(), e);
//        String meesage = "Global Exception Handler";
//        BaseObjectResult<String> baseObjectResult = new BaseObjectResult<String>(meesage, false, e.getMessage());
//        return baseObjectResult;
//    }
//}
