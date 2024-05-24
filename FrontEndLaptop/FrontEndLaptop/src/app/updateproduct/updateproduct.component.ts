import { Component, OnInit, } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from '../laptop';
import { Images } from '../images';
import { ImagesService } from '../images.service';



@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

laptop: Laptop=new Laptop();
image: any;
  id: any;
  
images: Images=new Images();


constructor(private laptopService: LaptopService, private route: ActivatedRoute, private router: Router,private imagesService:ImagesService,) {}

 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.laptopService.getProductById(this.id).subscribe(
      (data: Laptop) => {
        this.laptop = data || new Laptop(); // Set default values if data is undefined
      },
      (error: any) => console.log(error)
    );
  }
  
  saveProduct()
  {
    this.laptopService['addProduct'](this.laptop).subscribe((data:any) =>
    {
  console.log(data);
  this.goToLProductList();
    },
    (error: any)=>console.log(error));
  }
  saveImages()
  {
    this.imagesService['addImages'](this.images).subscribe((data:any) =>
    {
  console.log(data);
  this.goToLProductList();
    },
    (error: any)=>console.log(error));
  }

  goToLProductList()
  {
    this.router.navigate(['/laptop']);
  }
  onSubmit()
  {
    console.log(this.laptop);
    this.saveProduct();
    //alert("Product Updated Successfully..!");
      setTimeout(() => {
       // this.router.navigate(['/productlist']);
      }, 100);
      //images
      console.log(this.images);
      this.saveImages();
      alert("Product Updated Successfully..!");
        setTimeout(() => {
          this.router.navigate(['/productlist']);
        }, 100);
  

  }
  admindashboard(){
    this.router.navigate(['/admindashboard']);

  }
  
}

/*yes old
export class UpdateproductComponent implements OnInit {
  id!: number;
  laptop: Laptop = new Laptop(); // Initialize the laptop object

  constructor(private laptopService: LaptopService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.laptopService.getProductById(this.id).subscribe(
      (data: Laptop) => {
        this.laptop = data || new Laptop(); // Set default values if data is undefined
      },
      (error: any) => console.log(error)
    );
  }

  onSubmit() {
    // Ensure laptop object is properly populated before submitting
    if (!this.laptop.id) {
      console.error('Laptop object is not properly initialized');
      return;
    }

    this.laptopService.updateProduct(this.id, this.laptop).subscribe(
      (data: any) => {
        alert('Product Updated Successfully..!');
        setTimeout(() => {
          this.router.navigate(['/productlist']);
        }, 100); // Adjust the delay time as needed
      },
      (error: any) => console.log(error)
    );
  }

  goToProductList() {
    this.router.navigate(['/laptop']);
  }
}








/*
export class UpdateproductComponent implements OnInit {
  id!:number;
  laptop!: Laptop;
  constructor(private laptopService:LaptopService, private route:ActivatedRoute, private router:Router)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.laptopService["getProductById"](this.id).subscribe((data:Laptop)=>
    {
      this.laptop=data;
    },
    (error:any)=> console.log(error));
  }
  
  onSubmit() {
    this.laptopService.updateProduct(this.id, this.laptop).subscribe(
      (data: any) => {
        alert("Product Updated Successfully..!");
        setTimeout(() => {
          this.router.navigate(['/productlist']);
        }, 100); // Adjust the delay time as needed
      },
      (error: any) => console.log(error)
    );
  }
  
  goToProductList()
  {
     this.router.navigate(['/laptop']);
  }
}*/

