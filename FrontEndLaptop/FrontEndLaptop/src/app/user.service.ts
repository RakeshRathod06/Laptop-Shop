import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/users";

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/register`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/${id}`);
  }

  loginUser(credentials: any): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/login`, credentials);
  }
}
