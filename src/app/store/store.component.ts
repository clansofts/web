import { Component, OnInit } from '@angular/core';
import { CartService } from "./../cart/cart.service";
import { AppService } from './../app.service';
import { Product } from "../model/product.model";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  constructor(
    private cart: CartService,
    private appService: AppService
	) {}
  ngOnInit() {
  }

  addProductToCart(product: Product) {
		this.cart.addLine(product);
	}
}