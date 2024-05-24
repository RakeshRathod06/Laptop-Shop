import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  p: number = 1;
  count: number = 6;
  
  laptop!:Laptop[];
  route: ActivatedRoute | null | undefined;
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
       console.log(this.laptop);
     });
 }
 
 laptopDetails(id:number)
 {
   this.router.navigate(['laptopdetails',id]);
 }
 
 showProductDetails(productId: number) {
  this.router.navigate(['/productdetails', productId], { relativeTo: this.route });
}


goToNextPage(pageNumber: number) {
  this.p = pageNumber;
}

}



















/*

  filteredProducts: any[] = [];
  searchTerm: string = '';
laptop: any=[];

  constructor(private servicesService: ServicesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.products = this.servicesService.getProducts();
    this.filteredProducts = this.products; // Initialize filteredProducts with all products
  }

  showProductDetails(productId: number) {
    this.router.navigate(['/productdetails', productId], { relativeTo: this.route });
  }


  searchProduct(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (searchTerm.trim() !== '') {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = [];
      alert("not available")
    }
  }
 
    }
  
  
  


*/
