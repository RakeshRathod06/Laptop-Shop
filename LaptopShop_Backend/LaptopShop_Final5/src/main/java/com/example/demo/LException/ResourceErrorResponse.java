package com.example.demo.LException;

public class ResourceErrorResponse {
	private int status;
	private String msg;
	private long timeStamp;
	public ResourceErrorResponse(int status, String msg, long timeStamp) {
		super();
		this.status = status;
		this.msg = msg;
		this.timeStamp = timeStamp;
	}
	public ResourceErrorResponse() {
		super();
		
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public long getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(long timeStamp) {
		this.timeStamp = timeStamp;
	}
	@Override
	public String toString() {
		return "CustomerErrorResponse [status=" + status + ", msg=" + msg + ", timeStamp=" + timeStamp + "]";
	}
	
}
