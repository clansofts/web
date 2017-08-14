import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm } from '@angular/forms';
//import { Product } from './../../shared/product.model';
import { ApiService } from './../../app.service';
import { Observable } from 'rxjs';
import { Category } from './../../shared/category.model';
import { environment } from './../../../environments/environment';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
   @Input() multiple: boolean = false;
   @ViewChild('fileInput') inputEl: ElementRef;

  categories: Category[];
  loading: Boolean = false;
  newProduct;
  baseUrl = environment.apiUrl;

  constructor(
    public api: ApiService,
    private http: Http,
  ) { }

  ngOnInit() {
    this.api.get('categories')
      .subscribe(data => {
        this.categories = data
        /* var indexed_nodes = {}, tree_roots = [];
        for (var k
           = 0; k < data.length; k += 1) {
            data[k].children = [];            
        }
        for (var i = 0; i < data.length; i += 1) {
            indexed_nodes[data[i]._id] = data[i];
            
        }
        for (var j = 0; j < data.length; j += 1) {
            var parent = data[j].parent;
            if (parent === undefined) {
                tree_roots.push(data[j]);
            } else {
                indexed_nodes[parent].children.push(data[j]);
            }
        }
        console.log(JSON.stringify(tree_roots, undefined, "\t"));*/
      });
  }

 

  onSubmit(form: NgForm) {
    this.loading = true;
    const formValues = Object.assign({}, form.value);  
    const product = {
      name: `${formValues.name}`,
      description: `${formValues.description}`,
      price: formValues.price,
      stock: formValues.stock,
      //category: formValues.category
    };
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    console.log(inputEl)
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    formData.append('name', product.name)
    formData.append('description', product.description)
    formData.append('price', product.price)
    formData.append('stock', product.stock)
    //formData.append('category', product.category)
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            formData.append('photos', inputEl.files.item(i));
        }
        this.http.post(this.baseUrl +'/products', formData)
        .subscribe(data => {
          form.reset();
          this.loading = false;
          this.newProduct = data;
        });
    }
    
    /* this.api.post('products', product)
      .subscribe(data => {
        form.reset();
        this.loading = false;
        this.newProduct = data;
      }); */
  }
}
