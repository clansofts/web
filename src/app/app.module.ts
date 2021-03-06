/*****Modulos******/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterModule }   from '@angular/router';
import { CartModule } from './cart/cart.module';
/*****Rutas******/
import { routing } from './app.routes';
/*****Servicios******/
import { CartService } from "./cart/cart.service";
import { ChatService } from "./chat/chat.service";
import { AuthService } from "./auth/auth.service";
import { AppService, ApiService} from "./app.service";
/*****Componentes ******/
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './cart/cart-checkout/cart-checkout.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { MapsComponent } from './users/maps/maps.component';
/*  * Angular Firebase  */ 
import {AngularFireModule} from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ChatComponent } from './chat/chat.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhoneLoginComponent } from './auth/phone-login/phone-login.component';
import { PaymentComponent } from './payment/payment.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCsEgj7wbxqPO2CO68fYVFcYephX0w3qtE",
  authDomain: "play-ecommerce-b9e6d.firebaseapp.com",
  databaseURL: "https://play-ecommerce-b9e6d.firebaseio.com",
  projectId: "play-ecommerce-b9e6d",
  storageBucket: "play-ecommerce-b9e6d.appspot.com",
  messagingSenderId: "667487904086"
};
/*  */


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent,
    CartComponent,
    CartDetailComponent,
    CartCheckoutComponent,
    SigninComponent,
    SignupComponent,
    UsersComponent,
    MapsComponent,
    ChatComponent,
    ProductsComponent,
    AddProductComponent,
    ProductDetailComponent,
    OrdersComponent,
    CategoriesComponent,
    AddCategoryComponent,
    PageNotFoundComponent,
    PhoneLoginComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CartModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    ],
  providers: [
    CartService,
    ChatService,
    AuthService,
    AppService,
    ApiService,
    //MessageService,
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }