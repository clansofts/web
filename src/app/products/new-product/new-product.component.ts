import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm } from '@angular/forms';
import { Product } from './../../shared/product.model';
import { ApiService } from './../../app.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 
  loading: Boolean = false;
  newProduct: Product;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;

    const formValues = Object.assign({}, form.value);

    const product: Product = {
      name: `${formValues.name}`,
      description: `${formValues.description}`,
      price: formValues.price,
      stock: formValues.stock,
      picture: `${formValues.picture}`

    };

    this.api.post('products', product)
      .subscribe(data => {
        form.reset();
        this.loading = false;
        this.newProduct = data;
      });
  }
}
