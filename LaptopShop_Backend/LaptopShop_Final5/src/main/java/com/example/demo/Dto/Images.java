package com.example.demo.Dto;

public class Images {
	 private Long id;
	 
		private String image1;
		private String image2;
		private String image3;
		private String image4;
		private String image5;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getImage1() {
			return image1;
		}
		public void setImage1(String image1) {
			this.image1 = image1;
		}
		public String getImage2() {
			return image2;
		}
		public void setImage2(String image2) {
			this.image2 = image2;
		}
		public String getImage3() {
			return image3;
		}
		public void setImage3(String image3) {
			this.image3 = image3;
		}
		public String getImage4() {
			return image4;
		}
		public void setImage4(String image4) {
			this.image4 = image4;
		}
		public String getImage5() {
			return image5;
		}
		public void setImage5(String image5) {
			this.image5 = image5;
		}
		public Images(Long id, String image1, String image2, String image3, String image4, String image5) {
			super();
			this.id = id;
			this.image1 = image1;
			this.image2 = image2;
			this.image3 = image3;
			this.image4 = image4;
			this.image5 = image5;
		}
		public Images() {
			super();
		}
		@Override
		public String toString() {
			return "Images [id=" + id + ", image1=" + image1 + ", image2=" + image2 + ", image3=" + image3 + ", image4="
					+ image4 + ", image5=" + image5 + "]";
		}
		
}
