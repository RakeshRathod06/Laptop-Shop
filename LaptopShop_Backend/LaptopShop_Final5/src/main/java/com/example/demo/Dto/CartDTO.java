package com.example.demo.Dto;

import java.util.List;

public class CartDTO {

    private Long id;
    private String brand;
    private String model;
    private double price;
	private String description;
	private String image;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public CartDTO(Long id, String brand, String model, double price, String description, String image) {
		super();
		this.id = id;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.description = description;
		this.image = image;
	}
	public CartDTO() {
		super();
	}
	@Override
	public String toString() {
		return "CartDTO [id=" + id + ", brand=" + brand + ", model=" + model + ", price=" + price + ", description="
				+ description + ", image=" + image + "]";
	}
	
}