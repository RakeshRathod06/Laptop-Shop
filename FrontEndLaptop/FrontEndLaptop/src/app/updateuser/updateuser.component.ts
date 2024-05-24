import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  id!:number;
  user!:User[];
  route: any;
  constructor(private userService:UserService,private router:Router) {}
  
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.userService["getUserById"](this.id).subscribe((data:any)=>
    {
      this.user=data;
    },
    (error:any)=> console.log(error));
  }
  
 /* onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(
      (data: any) => {
        alert("USer data Updated Successfully..!");
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 100); // Adjust the delay time as needed
      },
      (error: any) => console.log(error)
    );
  }*/
  
  goToProductList()
  {
     this.router.navigate(['/users']);
  }
}



