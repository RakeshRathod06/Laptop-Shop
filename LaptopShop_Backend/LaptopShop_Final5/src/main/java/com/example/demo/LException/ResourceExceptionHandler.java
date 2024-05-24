package com.example.demo.LException;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ResourceExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler//to handle StudentNotFoundException
	public ResponseEntity<ResourceErrorResponse> handleException(ResourceNotFoundException ex){
		//create student error response
		ResourceErrorResponse error = new ResourceErrorResponse();
		error.setStatus(HttpStatus.NOT_FOUND.value());
		error.setMsg(ex.getMessage());
		error.setTimeStamp(System.currentTimeMillis());
		return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler //to catch any type of exception
	public ResponseEntity<ResourceErrorResponse> handleException(Exception ex){
		//create student error response
		ResourceErrorResponse error = new ResourceErrorResponse();
		error.setStatus(HttpStatus.BAD_REQUEST.value());
		error.setMsg(ex.getMessage());
		error.setTimeStamp(System.currentTimeMillis());
		return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatusCode status, WebRequest request) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) ->{
			
			String fieldName = ((FieldError) error).getField();
			String message = error.getDefaultMessage();
			errors.put(fieldName, message);
		});
		return new ResponseEntity<Object>(errors, HttpStatus.BAD_REQUEST);
	}
}
