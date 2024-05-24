package com.example.demo.Dto;


public class order {

	 private long id;
	    private String brand;
	    private String model;
	    private double price;
	    private String image;
	    private String description;
		public long getId() {
			return id;
		}
		public void setId(long id) {
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
		public String getImage() {
			return image;
		}
		public void setImage(String image) {
			this.image = image;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public order(long id, String brand, String model, double price, String image, String description) {
			super();
			this.id = id;
			this.brand = brand;
			this.model = model;
			this.price = price;
			this.image = image;
			this.description = description;
		}
		public order() {
			super();
		}
		@Override
		public String toString() {
			return "order [id=" + id + ", brand=" + brand + ", model=" + model + ", price=" + price + ", image=" + image
					+ ", description=" + description + "]";
		}
	   

		

}