import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppRoutes } from './app.routes';

import { Cart } from "./model/cart.model";
import { AppComponent } from './app.component';
//import { AuthComponent } from './auth/auth.component';
import { StoreComponent } from './store/store.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './cart/detail/detail.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    //AuthComponent,
    StoreComponent,
    NavBarComponent,
    CartComponent,
    DetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    ],
  providers: [Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }