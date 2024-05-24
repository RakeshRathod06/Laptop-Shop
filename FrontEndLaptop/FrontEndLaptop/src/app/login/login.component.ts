// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserauthService } from '../userauth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private auth:UserauthService, private httpClient: HttpClient) {}
  //faLock=faLock;
  loginForm=new FormGroup(
    {
      username:new  FormControl(''),
      password:new FormControl(''),
    }
  );
  ngOnInit():void{
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/header']);
    }
    }
    
  guide(){
    alert("Welcome. If you are a previous user, please provide your login credentials below to sign in.");
    alert("If you are a new user, click on 'Register' to sign up.");
    alert("If you are an admin, scroll down, click on 'Admin Login', provide your admin credentials, and sign in to the admin dashboard.");
    alert("Thank you.");
    
  }

  navigateToRegistration() {
    this.router.navigate(['/registration']);
  }

  //new working
  userLogin():void {
    const credentials = {
      username: this.username,
      password: this.password
    };
  if(this.loginForm.valid){
    this.auth.login(this.loginForm.value).subscribe((result)=>
    {
      console.log(result);
      alert(' login successful..!')
      this.router.navigate(['/header']);
    },
    (err:Error)=>{
      alert('login failed..')
      console.log(err.message);
    });
  }
  }
//oldest
  userLogin1() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.httpClient.post('http://localhost:8080/api/users/login', credentials).subscribe(
      (response: any) => {
        alert("Login successful... Happy shopping!");
        console.log('Login successful:', response);
        this.router.navigate(['/header']);
      },
      (error: any) => {
        alert("Login failed. Please check your credentials.");
        console.error('Login failed:', error);
      }
    );
  }
}
