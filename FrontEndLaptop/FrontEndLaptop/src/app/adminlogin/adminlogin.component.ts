import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';

  loginForm=new FormGroup(
    {
      username:new  FormControl(''),
      password:new FormControl(''),
    }
  );
  ngOnInit():void{
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/admindashboard']);
    }
    }

    constructor(private router: Router,private auth:AuthService, private httpClient: HttpClient) {}
    guide(){
    alert(" Welcome. If you are an admin, provide your admin credentials, and sign in to the admin dashboard.");

    alert("Welcome. If you are a previous user,scroll down and click on 'User login' and please provide your login credentials to sign in.");
    alert("If you are a new user, click on 'Register' to sign up in User login.");
   alert("Thank you.");
   this.router.navigate(['/adminlogin']);

    
  }

  //not in use
  navigateToRegistration() {
   // this.router.navigate(['/adminregistration']);
  }
  //new working
  adminLogin():void {
    const credentials = {
      username: this.username,
      password: this.password
    };
  if(this.loginForm.valid){
    this.auth.login(this.loginForm.value).subscribe((result)=>
    {
      console.log(result);
      alert('Admin login successful..!')
      this.router.navigate(['/admindashboard']);
    },
    (err:Error)=>{
      alert(err.message);
    });
  }
}
/*
  adminLogin() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.httpClient.post('http://localhost:8080/api/admins/login', credentials).subscribe(
      (response: any) => {
        alert("Login successful");
        console.log('Login successful:', response);
        this.router.navigate(['/admindashboard']);
      },
      (error: any) => {
        alert("Login failed. Please check your credentials.");
        console.error('Login failed:', error);
      }
    );
  }*/
}
