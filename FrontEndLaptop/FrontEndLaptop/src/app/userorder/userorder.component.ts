import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';

declare var Razorpay:any;
@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent {

  username:any;
email: any;
contact: any;
address: any;
product: any;
items: any;

user: any;
//order: any;

laptop: any;
order: Order = new Order(); 


  constructor(private router: Router, private http: HttpClient,   
     private orderService: OrderService,
     
    ) {}
//old
userSignup() {
 // alert('Fill this form to know the product status..!');
  const userData = {
    
    username: this.username,
    email: this.email,
    contact: this.contact,
    address: this.address,
    product: this.product,
    items: this.items,
  };

  // Assuming http.post returns an observable
  this.http.post("http://localhost:8080/api/userorders", userData).subscribe(
    (response: any) => {

      alert('Order placed successfully');
      this.router.navigate(['/products']);
    },
    (error: any) => {
      console.error('Registration failed:', error);
      // Handle error scenario
    }
  );
}

}






/*
 placeOrder(){
          console.log(this.laptop);
       this.saveProduct();
         setTimeout(() => {
           this.router.navigate(['/products']);
         }, 100); // Display an alert or feedback
             
             }
             saveProduct()
             {
               this.orderService['addOrder1'](this.laptop).subscribe((data:any) =>
               {
             console.log(data);
             this.payNow();

               },
               (error: any)=>console.log(error));
             }
             
  payNow(){

    const RazorpayOptions={
       description:'Laptop payment',
       currency:'INR',
       amount:this.laptop.price*100,//*this.order.no_of_items -for taling total amount of items
       name:"Laptop Shop",
       key:'rzp_test_YBTAR1o5KgDyxW',
       image:'https://th.bing.com/th?id=OIP.c3KYkDlHxSJuB2iRbTtlawHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2.jpg',
       prefill:{
         name:'Laptop Shop ',
         email:'sai@gmail.com',
         phone:'999999999',
       },
       theme:{
         color:'#f37254'
       },
       modal:{
         ondismiss: ()=> {
   console.log('dismissed and closed')
         }
       }
       }
   
       const successCallback=(paymentid:any)=>{
         console.log(paymentid);
       }
       const failureCallback=(e:any)=>{
         console.log(e);
       }
   
       Razorpay.open(RazorpayOptions ,successCallback,failureCallback)
   
     }

}

/*
  userSignup() {
    const orderDetails = {
      ...this.order, 
// Spread user details from the form
    };
    // Make an HTTP POST request to store order details
    this.orderService.addOrder(orderDetails)
      .subscribe(
        (order: Order) => {
          alert('Order placed successfully');
          this.toggleForm(); // Hide the form after successful submission
        },
        (error: any) => {
          console.error('Order placement failed:', error);
          // Handle error scenario
        }
      );
  }
 
}

}
*/

