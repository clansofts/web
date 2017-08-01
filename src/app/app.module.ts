/*****Modulos******/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
/*****Rutas******/
import { AppRoutes } from './app.routes';
/*****Servicios******/
import { CartService } from "./cart/cart.service";
import { ChatService } from "./chat/chat.service";
import { AuthService } from "./auth/auth.service";
import { AppService, ApiService } from "./app.service";
/*****Componentes ******/
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { StoreComponent } from './store/store.component';
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
import { NewProductComponent } from './products/new-product/new-product.component';
import { AddCategoriesComponent } from './products/add-categories/add-categories.component';

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
    StoreComponent,
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
    NewProductComponent,
    AddCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CartModule,
    AuthModule,
    RouterModule.forRoot(AppRoutes),
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
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }