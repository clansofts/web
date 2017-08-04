
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../app.service';
import { Product } from './../shared/product.model';
import { CartService } from "./../cart/cart.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product; 
  @Input('master') masterName: string;
  
  constructor(
    public api: ApiService,
    private cart: CartService,
    ) { }
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.api.get('products')
      .subscribe(data => this.products = data)
  }

  getProductDetail(id:number){
     var selectedProduct = this.products
     .filter(product => product._id === id);
     this.selectedProduct = selectedProduct[0]; 
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }

}
