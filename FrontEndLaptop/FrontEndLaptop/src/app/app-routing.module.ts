import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
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
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserorderComponent } from './userorder/userorder.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminregistration', component: AdminregistrationComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  { path:'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cart', component:CartComponent },
  { path: 'productlist',component:ProductlistComponent},
  { path: 'updateproduct/:id',component:UpdateproductComponent},
  { path: 'addproduct',component:AddproductComponent},
  { path: 'orders',component:OrdersComponent},
   // { path: '**', component: NotfoundComponent },
  { path: 'users',component:UsersComponent},
  { path: 'updateuser',component:UpdateuserComponent},
  { path: 'userorder',component:UserorderComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


