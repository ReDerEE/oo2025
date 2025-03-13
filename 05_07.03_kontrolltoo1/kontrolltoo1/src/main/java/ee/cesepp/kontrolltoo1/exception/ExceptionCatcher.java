package ee.cesepp.kontrolltoo1.exception;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class ExceptionCatcher {
    @ExceptionHandler
    public ResponseEntity<ErrorMessage> handleException(RuntimeException exceptionText) {
        ErrorMessage error = new ErrorMessage();
        error.setMessage(exceptionText.getMessage());
        error.setTimestamp(new Date());
        error.setStatus(400);
        return ResponseEntity.badRequest().body(error);
    }
}
