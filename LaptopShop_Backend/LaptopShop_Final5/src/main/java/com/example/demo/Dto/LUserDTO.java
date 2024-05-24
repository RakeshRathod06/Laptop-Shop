package com.example.demo.Dto;

public class LUserDTO {
    private Long id;
    private String username;
    private String  email;
    private int age;
    private String address;
    private String password;
	public LUserDTO(Long id, String username, String email, int age, String address, String password) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.age = age;
		this.address = address;
		this.password = password;
	}
	public LUserDTO() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "LUserDTO [id=" + id + ", username=" + username + ", email=" + email + ", age=" + age + ", address="
				+ address + ", password=" + password + "]";
	}
    
}