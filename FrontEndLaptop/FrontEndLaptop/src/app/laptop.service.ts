import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  cartItems: any[] = [];

  
  private baseURL="http://localhost:8080/api/laptops";
  constructor(private httpClient:HttpClient) {}
  getProductList():Observable<Laptop[]>
  {
    return this.httpClient.get<Laptop[]>(`${this.baseURL}`)
}
addProduct(laptop:Laptop):Observable<Object>
{
  return this.httpClient.post(`${this.baseURL}`,laptop);
}
getProductById(id:number):Observable<Laptop>
{
  return this.httpClient.get<Laptop>(`${this.baseURL}/${id}`);
}
updateProduct(id:number,laptop:Laptop):Observable<Object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,laptop);
}
deleteProduct(id:number):Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}




//cart using local storage
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

 
