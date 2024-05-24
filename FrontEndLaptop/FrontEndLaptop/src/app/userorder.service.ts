import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Userorder } from './userorder'; // Assuming Order model/interface is defined

@Injectable({
  providedIn: 'root'
})
export class UserorderService {
  private baseURL = 'http://localhost:8080/api/userorders';
  
  userOrders: Userorder[] = [];
  userOrdersUpdated = new Subject<Userorder[]>();

  constructor(private httpClient: HttpClient) {}

  addUserOrder(userOrder: Userorder): Observable<Userorder> {
    return this.httpClient.post<Userorder>(`${this.baseURL}`, userOrder)
      .pipe(
        tap((addedOrder: Userorder) => {
          this.userOrders.push(addedOrder);
          this.userOrdersUpdated.next([...this.userOrders]);
        }),
        catchError((error) => {
          console.error('Error adding user order:', error);
          return throwError(error);
        })
      );
  }
  //update userorder
  updateUserOrder(id: number, userorder: Userorder): Observable<Userorder> {
    return this.httpClient.put<Userorder>(`${this.baseURL}/${id}`, userorder);
  }

  getUserOrders(): Observable<Userorder[]> {
    return this.httpClient.get<Userorder[]>(`${this.baseURL}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching user orders:', error);
          return throwError(error);
        })
      );
  }
  getUserOrderById(id: number): Observable<Userorder> {
    return this.httpClient.get<Userorder>(`${this.baseURL}/${id}`).pipe(
      catchError((error) => {
        // Handle error
        console.error(`Error fetching order with ID ${id}:`, error);
        // Rethrow the error or handle as required
        return throwError(error);
      })
    );
  }

}

  /* Other methods like updateUserOrder, deleteUserOrder, etc. can be similarly implemented
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

}*/
