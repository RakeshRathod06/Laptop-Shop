

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { OrderService } from '../order.service';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '../laptop';

//import { CartService } from '../cartservice.service';

declare var Razorpay:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

//using local storage
export class CartComponent implements OnInit {
  cartItems: any[] = [];
 laptop: any;
//  laptop!:Laptop[];

  products: any[] = [];
  route: ActivatedRoute | null | undefined;

  constructor(private laptopService: LaptopService,
    private servicesService: ServicesService,private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
   // private route: ActivatedRoute,
    private http: HttpClient) {}
  
    ngOnInit() {
      this.cartItems = this.servicesService.getCartItems();
    }
    
        //new by local storage view to buy
    buy(productId: number) {
      this.router.navigate(['/productdetails', productId], { relativeTo: this.route });
    }
    removeFromCart(index: number) {
      this.servicesService.removeFromCart(index);
    }




     /*newest tomove view to buy
     buy2() {
      if (this.laptop && this.laptop.id) {
        this.router.navigate(['/productdetails:/id', this.laptop.id]);
      } else {
        console.error('Product ID is undefined.');
      }
    }
    //old by local storage view to buy
    buy1() {
      this.router.navigate(['/productdetails']);
    }*/

  }
 






    /*using cartservice
  ngOnInit1() {
    this.fetchCartItems();
  }
  fetchCartItems() {
    this.cartService.getAllCarts().subscribe(
      (items: any[]) => {
        this.cartItems = items;
        // If there is at least one item in the cart, consider the first item as the laptop
        if (this.cartItems.length > 0) {
          this.laptop = this.cartItems[0]; // Assign the first item in the cart as the laptop
        }
      },
      (error) => {
        console.error('Error fetching cart items:', error);
        // Handle error fetching cart items
      }
    );
  }

    //newest tomove view to buy
    buy() {
      if (this.laptop && this.laptop.id) {
        this.router.navigate(['/productdetails', this.laptop.id]);
      } else {
        console.error('Product ID is undefined.');
      }
    }
    removeFromCart(id: number) {
      this.cartService.deleteCart(id).subscribe(
        () => {
          alert('Product deleted successfully.');
          // this.router.navigate(['/products']);

          setTimeout(() => {
            //this.router.navigate(['/products']);
            //this.deleteAlert();
          }, 100); // Adjust the delay time as needed
        },
        (error) => {
          console.error('Error deleting product:', error);
          // Handle error deleting product
        }
      );
    }
  deleteAlert(){
    alert('Product deleted successfully.');
    this.router.navigate(['/products']);

  }
    
    
 
}





/*
//payments
  payNow(){
    const RazorpayOptions={
      description:'Laptop Payment',
      currency:'INR',
      amount:this.laptop.price,
      name:"Laptop Shop",
      key:'rzp_test_YBTAR1o5KgDyxW',
      image:'https://th.bing.com/th?id=OIP.c3KYkDlHxSJuB2iRbTtlawHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2.jpg',
      prefill:{
        name:'Laptop Shop',
        email:'sai@gmail.com',
        phone:'999999999',
      },
      theme:{
        color:'#f37254'
      },
      modal:{
        ondismiss: ()=> {
  console.log('dismissed')
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
  
  
    } placeOrder(){
      this.orderService.addOrder(this.laptop); // Add the selected product to orders
      alert('Order being placed... pay online.'); // Display an alert or feedback
        
        }
 cashOnDelivery() {
     this.orderService.addOrder(this.laptop); // Add the selected product to orders
      alert('Order placed, pay when delivered.'); // Display an alert or feedback
     
    }
*/








