import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { ImagesService } from '../images.service';
import { Images } from '../images';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  laptop: Laptop=new Laptop();
//image: any;
images: Images=new Images();

  constructor(private laptopService:LaptopService,private router:Router,private imagesService:ImagesService,)
  {}
  ngOnInit(): void {
    
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
    alert("Product Updated Successfully..!");
      setTimeout(() => {
        this.router.navigate(['/productlist']);
      }, 100);

//images
      console.log(this.images);
      this.saveImages();
     // alert("Product Updated Successfully..!");
        setTimeout(() => {
         // this.router.navigate(['/productlist']);
        }, 100);
  
  }
  admindashboard(){
    this.router.navigate(['/admindashboard']);

  }
  }