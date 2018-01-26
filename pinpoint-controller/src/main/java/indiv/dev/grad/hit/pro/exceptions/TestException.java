package indiv.dev.grad.hit.pro.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Test")
public class TestException extends RuntimeException {
}
