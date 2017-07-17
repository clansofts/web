import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppRoutes } from './app.routes';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { CartService } from "./cart/cart.service";
import { AuthService } from "./auth/auth.service";
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { StoreComponent } from './store/store.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './cart/cart-checkout/cart-checkout.component';
import { CartComponent } from './cart/cart.component';
/*  * Angular Firebase  */ 
import {AngularFireModule} from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { MapsComponent } from './users/maps/maps.component';
import { OrdersComponent } from './orders/orders.component';

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
    OrdersComponent
  ],
  imports: [
    BrowserModule,
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }