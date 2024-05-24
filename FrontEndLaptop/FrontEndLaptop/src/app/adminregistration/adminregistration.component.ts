import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  adminSignup() {
    // Prepare the user registration data
    const userData = {
      username: this.username,
      password: this.password,
    };

    // Make an HTTP POST request to your API to register the user
    this.http.post("http://localhost:8080/api/admins/register", userData).subscribe(
      (response: any) => {
        alert("Registration successful");
        // After registration, navigate to the '/header' route
        this.router.navigate(['/admindashboard']);
      },
      (error: any) => {
        console.error('Registration failed:', error);
        // Handle the error, display an error message, or take appropriate action
      }
    );
  }
}
