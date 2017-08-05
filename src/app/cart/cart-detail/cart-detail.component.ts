import { Component, OnInit } from '@angular/core';
import { CartService } from "./../cart.service";
import { ApiService } from './../../app.service';
@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
   cartKey = 'cart';

  constructor(
    public cart: CartService,
    public api: ApiService
  ) { }

  products= localStorage.getItem(this.cartKey);

  ngOnInit() {
  }

  enviarOrden(){
     this.api.post('orders', this.products).subscribe();
     console.log(this.products)
  }
}
