import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
isNewUser: any;
registerNewUser() {
throw new Error('Method not implemented.');
}
toggleForm() {
throw new Error('Method not implemented.');
}
  userEmail: string = '';
  userPassword: string = '';
  newUserEmail: string = '';
  newUserPassword: string = '';
  adminEmail: string = '';
  adminPassword: string = '';
  showUserSignup: boolean = false;

  constructor(private userauth:UserauthService,private router: Router){}
  ngOnInit(): void {}
  logout():void{
    this.userauth.logout();
  }
  
  userLogin() {
    // Implement user login logic here, e.g., check credentials
    // For this example, we'll assume a successful login
    const loginIsSuccessful = true;

    // If login is successful, navigate to the header component
    if (loginIsSuccessful) {
      this.router.navigate(['/header']);
    }
  }

  userSignup() {
    // Implement user signup logic here, e.g., create a new user, set user session, and navigate to the home page
    this.router.navigate(['/header']);
  }

  adminLogin() {
    // Implement admin login logic here, e.g., check admin credentials, set admin session, and navigate to the admin dashboard
    this.router.navigate(['/admin-dashboard']);
  }

  showUserSignupForm() {
    this.showUserSignup = true;
  }
}


