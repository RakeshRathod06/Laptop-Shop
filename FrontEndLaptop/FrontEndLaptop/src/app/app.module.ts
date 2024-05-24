import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProductsComponent } from './products/products.component';
import { OffersComponent } from './offers/offers.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserorderComponent } from './userorder/userorder.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//name- Darshan Gondkar
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminloginComponent,
    HeaderComponent,
    AdminregistrationComponent,
    AdmindashboardComponent,
    ProductsComponent,
    OffersComponent,
    ProductdetailsComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    ProductlistComponent,
    UpdateproductComponent,
    AddproductComponent,
    OrdersComponent,
    UsersComponent,
    NotfoundComponent,
    UpdateuserComponent,
    UserorderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
   NgxPaginationModule ,
    CarouselModule.forRoot(), // Add this line to import the CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

// product.model.ts

export interface Product {
  id: number;
  brand: string;
  model: string;
  price: string;
  image: string; // URL to the product image
  details: string; // Detailed product specifications
}


