import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
 
  laptop!:Laptop[];
  constructor(private laptopService:LaptopService,private router:Router)
  {}
  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts()
 {
   this.laptopService.getProductList().subscribe((data:any)=>
     {
       this.laptop=data;
     });
 }
 
 laptopDetails(id:number)
 {
   this.router.navigate(['laptopdetails',id]);
 }
 
 updateProduct(id:number)
 {
   this.router.navigate(['updateproduct',id]);
 }
 deleteProduct(id: number) {
  this.laptopService.deleteProduct(id).subscribe(
    (data: any) => {
      alert('Product deleted successfully..!');
      setTimeout(() => {
        this.router.navigate(['/productlist']);
      }, 100); // Adjust the delay time as needed
    },
    (error: any) => console.log('Error deleting product:', error)
  );
}


delete(){
alert('Product deleted successfully..! Refresh to check');
this.router.navigate(['/productlist']);
}


 
 }
