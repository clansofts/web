import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import { Product } from "./model/product.model";
@Injectable()
export class AppService {


  baseUrl = 'https://lcboapi.com/products';
  accessKey='?access_key=MDpmNmJhMzM5ZS01ZGE5LTExZTctOTJhZC0zNzQ1YzhiOWU3OWI6Z1JkVDlENlJhaHRqMlFhVE5lRmI2MVExSVNrRE1BRWJVeExT';
	productsList: Product[];

  constructor(
    private http:Http
  ) { 
   	this.http.request(this.baseUrl + this.accessKey)
			.subscribe((response:Response)=>{
        this.productsList = response.json().result;
			}) 
  }

  getProducts(name: string): Observable<Product[]> { 
    return Observable.of(this.filterProducts(name)); 
  } 

  getProductNames(name: string): Observable<string[]> { 
    return Observable.of(this.filterProducts(name) 
                     .map(product => product.name)); 
  } 

  filterProducts(name: string): Product[] { 
   return name ? 
      this.productsList.filter((product)=> new RegExp(name, 'gi').test(product.name)):[]; 
  }

}