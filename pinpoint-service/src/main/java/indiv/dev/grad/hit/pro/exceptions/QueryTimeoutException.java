package indiv.dev.grad.hit.pro.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Response Content Too Large")
public class QueryTimeoutException extends RuntimeException {
}
