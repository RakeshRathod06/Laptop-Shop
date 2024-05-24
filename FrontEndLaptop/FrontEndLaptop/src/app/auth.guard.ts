//logout1
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
// for admin login for my laptop shop
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(!this.auth.isLoggedIn())
      {
        this.router.navigate(['/adminlogin']);
      }
    return this.auth.isLoggedIn();
  }
  
}