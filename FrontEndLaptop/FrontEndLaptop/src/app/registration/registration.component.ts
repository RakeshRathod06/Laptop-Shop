import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
email: any;
age: any;
address: any;
confirmPassword: any;

  constructor(private router: Router, private http: HttpClient) {}

  userSignup() {
    // Prepare the user registration data
    const userData = {
      username: this.username,
      email:this.email,
      age:this.age,
      address:this.address,
      password: this.password,
    };

    // Make an HTTP POST request to your API to register the user
    this.http.post("http://localhost:8080/api/users/register", userData).subscribe(
      (response: any) => {
        alert("Registration successful");
        // After registration, navigate to the '/header' route
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Registration failed:', error);
        // Handle the error, display an error message, or take appropriate action
      }
    );
  }
}
