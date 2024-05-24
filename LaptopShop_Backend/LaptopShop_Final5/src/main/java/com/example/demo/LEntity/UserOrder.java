package com.example.demo.LEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "UserOrder")
public class UserOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String email;
    private long contact;
    private String address;
    private String product;
    private int items;
    private String status;
	public long getId() {
		return id;
	}
	public void setId(long id) {
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
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public int getItems() {
		return items;
	}
	public void setItems(int items) {
		this.items = items;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public UserOrder(long id, String username, String email, long contact, String address, String product, int items,
			String status) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.product = product;
		this.items = items;
		this.status = status;
	}
	public UserOrder() {
		super();
	}
	@Override
	public String toString() {
		return "UserOrder [id=" + id + ", username=" + username + ", email=" + email + ", contact=" + contact
				+ ", address=" + address + ", product=" + product + ", items=" + items + ", status=" + status + "]";
	}

}