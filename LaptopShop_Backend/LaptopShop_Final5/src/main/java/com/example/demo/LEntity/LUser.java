package com.example.demo.LEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id",length=250)
    private Long id;
	@Column(name="username",length=250)
    private String username;
	@Column(name="email",length=250)
    private String email;
	@Column(name="age",length=250)
    private int age;
	@Column(name="address",length=250)
    private String address;
	@Column(name="password",length=250)
    private String password;

	
	//getters
	LUser(Long id, String username, String email, int age, String address, String password) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.age = age;
		this.address = address;
		this.password = password;
	}
	public LUser() {
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
		return "LUser [id=" + id + ", username=" + username + ", email=" + email + ", age=" + age + ", address="
				+ address + ", password=" + password + "]";
	}
	
	
	}