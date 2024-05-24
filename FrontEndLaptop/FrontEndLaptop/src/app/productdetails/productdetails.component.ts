import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { CartService } from '../cart.service';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Order } from '../order';
import { Userorder } from '../userorder';
import { ImagesService } from '../images.service';
import { Images } from '../images';


declare var Razorpay:any;
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  //selectedProduct: Laptop | undefined;
 laptop: any;
  user: any;
product:any;
  order: Order = new Order(); // Initialize the order object
  userorder:any; // Initialize the order object

  itemsValue: number = 1; // Variable to store the value from the form
  amount: number = 1; // Initialize 'amount' variable
  images: Images = new Images(); // Initialize the order object
//images:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private servicesService: ServicesService,
    private laptopService: LaptopService, // Inject LaptopService
    private userService:UserService,
    private orderService: OrderService,
    private http: HttpClient,
    private imagesService: ImagesService, // Inject LaptopService

  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      //productId defined here
      const productId = Number(params.get('id'));

      // Fetch the product details using the LaptopService
      this.laptopService.getProductById(productId).subscribe(
        (product: Laptop) => {
          this.laptop = product;
          if (!this.laptop) {
            // Handle the case when the product is not found
            // this.router.navigate(['/productnotfound']);
          }
        },
        (error: any) => {
          // Handle the error if the product fetching fails
          console.error('Error fetching product details:', error);
        }
      );
    });

    //images
    this.route.paramMap.subscribe((params) => {
      const imagesId = Number(params.get('id'));

      // Fetch the product details using the LaptopService
      this.imagesService.getImagesById(imagesId).subscribe(
        (images: Images) => {
          this.images = images;
          if (!this.images) {
            // Handle the case when the product is not found
            // this.router.navigate(['/productnotfound']);
          }
        },
        (error: any) => {
          // Handle the error if the product fetching fails
          console.error('Error fetching product details:', error);
        }
      );
    });
  }
  

//add to cart by local storage
addToCart() {
    this.servicesService.addToCart(this.laptop);
    alert("Product added to cart");
    this.router.navigate(['/cart']);

  }

/*add to cart in cartservice
addToCart() {
  const cartDetails = {
    laptop: this.laptop,
    user: this.user
  };
  this.cartService.saveCart(cartDetails).subscribe(
    (response) => {
      console.log('Product added to cart:', response);
      alert("Product added to cart");
      this.router.navigate(['/cart']);
      // Handle success - maybe show a success message
    },
    (error) => {
      console.error('Error adding product to cart:', error);
      // Handle error - show an error message or perform error handling
    }
  );
}*/

//it to store it in razorpay payment
items() {
  // Use the value from the form and update 'amount' accordingly
 // this.amount = this.laptop.price * 100 * this.itemsValue;
  alert('added..')
}

  payNow(){

    const RazorpayOptions={
       description:'Laptop payment',
       currency:'INR',
       amount: this.laptop.price*100*this.itemsValue,// -for taling total amount of items *this.userorder.items,
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
         placeOrder(){
          console.log(this.laptop);
       this.saveProduct();
       alert('Order being placed... pay online.'); // Display an alert or feedback
       alert(' Also Fill the payment form by clicking on payment form button to proceed...');
         setTimeout(() => {
           //this.router.navigate(['/products']);
         }, 100); // Display an alert or feedback
             
             }

     //old
     cashOnDelivery()
     {
       console.log(this.laptop);
       this.saveProduct();
       alert("Order placed, pay when delivered.");
       alert(' Also Fill the payment form by clicking on payment form button to proceed...');
         setTimeout(() => {
          // this.router.navigate(['/products']);
         }, 100);
   
     }
     //userdata order
    userData(){
      //alert('Fill the payment form to proceed...');
           this.router.navigate(['/userorder']);
     }

      //newest1
      saveProduct()
      {
        this.orderService['addOrder1'](this.laptop).subscribe((data:any) =>
        {
      console.log(data);
        },
        (error: any)=>console.log(error));
      }
 
    



    }




     /*
     //oldest without userdata
  cashOnDeliveryy() {
      this.orderService.addOrder(this.laptop); // Add the selected product to orders
       alert('Order placed, pay when delivered.'); // Display an alert or feedback
   //to fill user form
//this.router.navigate(['/userorder']);
   //alert('Fill the payment form to proceed...'); // Display an alert or feedback

     } placeOrderr(){
      this.orderService.addOrder(this.laptop); // Add the selected product to orders
       alert('Order being placed... pay online.'); // Display an alert or feedback
         
         }

     
     new
      cashOnDelivery1() {
      //this.orderService.addOrder(this.laptop).subscribe(
      this.http.post("http://localhost:8080/api/orders", this.laptop).subscribe(
        (response: any) => {
          alert('Fill the payment form to proceed...');
          //this.router.navigate(['/userorder']);
        },
        (error: any) => {
          console.error('Order placement failed:', error);
          // Handle error scenario
        }
      );
    }
     new with userdata 
     cashOnDelivery() {
     this.orderService.addOrder(this.laptop); // Add the selected product to orders
      alert('Order placed, pay when delivered.');

    }
      toggleForm(): void {
    this.showForm = !this.showForm;
  }
  */
    
  
    