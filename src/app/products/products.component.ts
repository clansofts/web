
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService, AppService } from './../app.service';
import { Product } from './../shared/product.model';
import { CartService } from "./../cart/cart.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  selectedProduct: Product; 
  message: any;
  subscription: Subscription;
  constructor(
    public api: ApiService,
    private cart: CartService,
    private appService: AppService,    
    ) { 
      this.subscription = this.appService.getProduct().subscribe( message => { 
        this.message = message; 
      })    
      
    }
  ngOnInit() {
  }

 
/* 
  getProductDetail(id:number){
     var selectedProduct = this.products
     .filter(product => product._id === id);
     this.selectedProduct = selectedProduct[0]; 
  } */

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
