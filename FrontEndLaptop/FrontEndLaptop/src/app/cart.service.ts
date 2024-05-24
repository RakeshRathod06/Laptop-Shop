import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/carts'; // Update with your Spring Boot API URL

  constructor(private http: HttpClient) {}

  saveCart(cart: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, cart);
  }

  getAllCarts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getCartById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateCart(id: number, cart: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cart);
  }

  deleteCart(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Other methods for cart-related operations as needed
}
