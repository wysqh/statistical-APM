package indiv.dev.grad.hit.pro.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NO_CONTENT, reason = "No content")
public class NoContentException extends RuntimeException {

}
