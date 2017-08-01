
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../app.service';
import { Product } from './../shared/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[];
    @Input('master') masterName: string;
    
    constructor(
      public api: ApiService,
      ) { }
    ngOnInit() {
        this.getProducts();
    }

    getProducts(){
      this.api.get('products')
      .subscribe(data => this.products = data)
    }

}
