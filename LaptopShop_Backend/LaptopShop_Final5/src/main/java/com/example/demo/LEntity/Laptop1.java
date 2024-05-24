package com.example.demo.LEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "laptops")
public class Laptop1 {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Brand is mandatory")
    @Size(max = 50, message = "Brand can have at most 50 characters")
    private String brand;

    @NotBlank(message = "Model is mandatory")
    @Size(max = 50, message = "Model can have at most 50 characters")
    private String model;

    @Positive(message = "Price must be greater than zero")
    private double price;

    @Size(max = 2000, message = "Description can have at most 2000 characters")
    private String description;

    @NotBlank(message = "Image URL is mandatory")
    private String image;

	
	  //getters and setters
	public Laptop1() {
		super();
	}


	public Laptop1(Long id,
			@NotBlank(message = "Brand is mandatory") @Size(max = 50, message = "Brand can have at most 50 characters") String brand,
			@NotBlank(message = "Model is mandatory") @Size(max = 50, message = "Model can have at most 50 characters") String model,
			@Positive(message = "Price must be greater than zero") double price,
			@Size(max = 2000, message = "Description can have at most 2000 characters") String description,
			@NotBlank(message = "Image URL is mandatory")String image) {
		super();
		this.id = id;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.description = description;
		this.image = image;
	}


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


	@Override
	public String toString() {
		return "Laptop1 [id=" + id + ", brand=" + brand + ", model=" + model + ", price=" + price + ", description="
				+ description + ", image=" + image + "]";
	}

	
	
	
    
   
}



