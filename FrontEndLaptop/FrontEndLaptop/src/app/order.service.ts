import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Order } from './order'; // Assuming Order model/interface is defined
import { User } from './user';
import { throwError, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = 'http://localhost:8080/api/orders';
  private baseURL2 = 'http://localhost:8080/api/orders/add';

  orders: Order[] = []; // Initialize orders array
  ordersUpdated = new Subject<Order[]>();

  constructor(private httpClient: HttpClient) {}

  // ...
  //newest
  addOrder2(newOrder: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.baseURL2}`, newOrder);
  }
  addOrder1(newOrder: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.baseURL}`, newOrder)
      .pipe(
        tap((order: Order) => {
          this.orders.push(order);
          this.ordersUpdated.next([...this.orders]); // Notify subscribers about changes
        }),
        catchError((error) => {
          // Handle error
          console.error('Error adding order:', error);
          return throwError(error);
        })
      );
  }
  // ... other methods
  



//oldest
  addOrder(newOrder: Order) {
    this.httpClient.post<Order>(`${this.baseURL}`, newOrder).subscribe(
      (order: Order) => {
        this.orders.push(order);
        this.ordersUpdated.next([...this.orders]); // Notify subscribers about changes
      },
      (error) => {
        // Handle error
        console.error('Error adding order:', error);
        // You might want to throw an error or display a message to the user
        return throwError(error);
      }
    );
  }


  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.baseURL}`).pipe(
      catchError((error) => {
        // Handle error
        console.error('Error fetching orders:', error);
        // Rethrow the error or handle as required
        return throwError(error);
      })
    );
  }

  getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.baseURL}/${id}`).pipe(
      catchError((error) => {
        // Handle error
        console.error(`Error fetching order with ID ${id}:`, error);
        // Rethrow the error or handle as required
        return throwError(error);
      })
    );
  }

  // Implement other methods similarly for updating and deleting orders
  
}
