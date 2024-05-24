import { Injectable } from '@angular/core';
import { Product } from './app.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  cartItems: any[] = [];

  
//local storage
getCartItems(): any[] {
  const cartData = localStorage.getItem('cart');
  if (cartData) {
    // Parse the JSON string to get the array
    this.cartItems = JSON.parse(cartData);
  }
  return this.cartItems;
}

addToCart(product: any) {
this.cartItems.push(product);
// Save the updated cart to LocalStorage
localStorage.setItem('cart', JSON.stringify(this.cartItems));
}
// Retrieve from LocalStorage
ngOnInit() {
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    this.cartItems = JSON.parse(storedCartItems);
  }
}


removeFromCart(index: number) {
  this.cartItems.splice(index, 1);
  this.saveCartToLocalStorage();
}

private saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
}


}




  /*
  private baseURL="http://localhost:8080/api/laptops"
  submitForm(_value: any) {
    throw new Error('Method not implemented.');
  }
 
 // cartItems: any[] = [];

  constructor(private httpClient:HttpClient) {}

  private products: Product[] = [
    {
      id: 1,
      brand: 'Dell',
      model: 'Inspiron 15',
      price: 'Rs.59999',
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3530-intel/media-gallery/black/notebook-inspiron-15-3530-nt-plastic-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full',
      details:  ' Dell Inspiron 15-inch Laptop (39.62cms) | Windows 11, MS Office H&S 2019 | Intel i3-1115G4 | 8GB DDR4 SDRAM, 512GB SSD | FHD Screen, WVA AG Narrow Border | 3511 - Carbon Black (D560842WIN9B)',
    },
    {
      id: 2,
      brand: 'lenovo',
      model: 'ideapad',
      price: '$1499',
      image: 'https://m.media-amazon.com/images/I/512QAURU1TL._SL1080_.jpg',
      details: 'Product details 2',
    },
    {
      id: 3,
      brand: 'Apple',
      model: 'macbook Air',
      price: '$1499',
      image: 'https://th.bing.com/th?id=OIP.c3KYkDlHxSJuB2iRbTtlawHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2.jpg',
      details: 'Product details 2',
    },
    {
      id: 4,
      brand: 'laptop bag',
      model: '',
      price: '$1499',
      image: 'https://m.media-amazon.com/images/I/81WGjz9LLkL._AC_UL320_.jpg',
      details: 'Product details 2',
    },
    {
      id: 5,
      brand: 'Brand 2',
      model: 'Model 2',
      price: '$1499',
      image: 'image-url-2.jpg',
      details: 'Product details 2',
    },
    // Add more products as needed
  ];
  
  getProductList():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  addProduct(product:Product):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,product)
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  deleteProduct(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}


function logout() {
  throw new Error('Function not implemented.');
}

*/

