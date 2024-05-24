import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  private loginUrl = 'http://localhost:8080/api/users/login';
  //private logoutUrl = 'http://localhost:8080/api/users/logout';

  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  /*logout1(): Observable<any> {
    return this.http.post(this.loginUrl, {}).pipe(
      map(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }),
      catchError((error) => {
        console.error('Logout error:', error);
        return throwError('Failed to logout');
      })
    );
  }*/
  logout(): void {
    alert("you are logging out..");
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  login({ username, password }: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      map((response) => {
        this.setToken(response.token); // Assuming the API returns a token upon successful login
        return response;
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError('Failed to login');
      })
    );
  }
}
