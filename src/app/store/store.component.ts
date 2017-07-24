import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CartService } from "./../cart/cart.service";
import { Product } from "../model/product.model";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products_API:Array<Object>;
  baseUrl = 'https://lcboapi.com/products';
  accessKey='?access_key=MDpmNmJhMzM5ZS01ZGE5LTExZTctOTJhZC0zNzQ1YzhiOWU3OWI6Z1JkVDlENlJhaHRqMlFhVE5lRmI2MVExSVNrRE1BRWJVeExT';
  constructor(
    private http:Http,
    private cart: CartService,

	) {}

  ngOnInit() {
		this.getproducts();
  }
	//utilizamos promesas para cargar los productos
	getproducts():void{
		this.http.request(this.baseUrl + this.accessKey)
			.subscribe((response:Response)=>{
        this.products_API = response.json().result;
        console.log(this.products_API)
			})
  }
  addProductToCart(product: Product) {
		this.cart.addLine(product);
		//this.router.navigateByUrl("/cart");
	}
}