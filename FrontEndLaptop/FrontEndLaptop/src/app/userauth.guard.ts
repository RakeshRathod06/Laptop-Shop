
//logout2
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserauthService } from './userauth.service';

@Injectable({
  providedIn: 'root'
})
// for user login for my laptop shop
export class userauthGuard implements CanActivate {
  constructor(private router:Router,private userauth:UserauthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(!this.userauth.isLoggedIn())
      {
        this.router.navigate(['/login']);
      }
    return this.userauth.isLoggedIn();
  }
  
}