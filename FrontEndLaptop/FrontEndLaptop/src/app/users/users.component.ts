import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  user!:User[];
  constructor(private userService:UserService,private router:Router)
  {}

  
  ngOnInit(): void {
    this.getUsers();
  }
 private getUsers()
 {
   this.userService.getAllUsers().subscribe((data:any)=>
     {
       this.user=data;
     });
 }
 private getAllUsers()
 {
  return this.getUsers;
 }


//butons
 updateUser(id:number)
 {
   this.router.navigate(['updateuser',id]);
 }
 deleteUser(id: number) {
 this.userService.deleteUser(id).subscribe(
    (data: any) => {
      alert('user deleted successfully..! Refresh to check');
      setTimeout(() => {
        this.router.navigate(['/users']);
      }, 100); // Adjust the delay time as needed
    },
    (error: any) => console.log('Error deleting product:', error)
  );
}




}

