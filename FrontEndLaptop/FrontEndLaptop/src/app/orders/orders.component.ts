// orders.component.ts

import { Component, OnInit,OnDestroy } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';
import { Order } from '../order';
import { Userorder } from '../userorder'; // Update the path as per your model/interface file
import { UserorderService } from '../userorder.service';

//import { UserorderService } from'../userorder.service'; // Replace with the correct path to your service


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  users: Userorder[] = [];
  showForm: any;

  constructor(private laptopService:LaptopService,private orderService: OrderService,private userorderService:UserorderService){}

  ngOnInit() {
    this.loadOrders();
    this.getUserOrders();
  // this.getUserById(id);
  }

 //shows orders1
  loadOrders() {
    this.orderService.getOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      },
      (error) => {
        // Handle error
        console.error('Error fetching orders:', error);
        // You might want to display an error message or handle it as required
      }
    );
  }

  // Optional: Implement a method to refresh orders after placing a new one
  refreshOrders() {
    this.loadOrders();
    this.getUserOrders();
  }

  // Optionally, implement other functionalities like updating or deleting orders
 
//to get "userorder" dataconstructor(private userorderService: UserOrderService) {}
private getUserOrders2() {
  this.userorderService.getUserOrders().subscribe(
    (userOrders: Userorder[]) => {
      this.users = userOrders;
    },
    (error) => {
      console.error('Error fetching user orders:', error);
      // You might want to display an error message or handle it as required
    }
  );
}

//newest 
getUserOrders() {
  this.userorderService.getUserOrders().subscribe(
    (userOrders: Userorder[]) => {
      this.users = userOrders;
    },
    (error) => {
      console.error('Error fetching user orders:', error);
    }
  );
}

//newest status data
  updateStatus(user: Userorder) {
    user.status = user.updatedStatus; // Update 'status' field with the new value

    this.userorderService.updateUserOrder(user.id, user).subscribe(
      (updatedOrder: Userorder) => {
        console.log('Order status updated:', updatedOrder);
        alert('Order status updated successfully.');
        user.showForm = false;
      },
      (error) => {
        console.error('Error updating order status:', error);
      }
    );
  }

  toggleForm(user: Userorder): void {
    user.showForm = !user.showForm;
    user.updatedStatus = user.status;
  }

}

//

 /*to show the user in orders who placed order by id
 getUserById(id:number) {
  this.userService.getUserById(id).subscribe((data:any)=>{
    this.user=data;

  })
}
private getAllUsers()
{
 return this.getUsers;
}
 

}
*/