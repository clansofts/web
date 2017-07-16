import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartRoutes } from './cart.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CartRoutes),
  ],
  declarations: [
  ]
})
export class CartModule { }