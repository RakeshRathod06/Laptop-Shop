import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// for admin login for my laptop shop
export class AuthService {

  constructor( private router:Router) { }
  setToken(token:string):void{
    localStorage.setItem('token',token);
  }
  getToken():string|null{
    return localStorage.getItem('token');

  }
isLoggedIn(){
  return this.getToken()!==null;
}
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/adminlogin']);
}
login({username,password}:any):Observable<any>{
  if(username==='laptop' && password==='shop'){
    this.setToken('abcdefghijklmnopqrstuvwxyz');
    return of({name:'laptopshop',username:'laptop'});
  }
  return throwError(new Error('Failed to Login'));
}
}
