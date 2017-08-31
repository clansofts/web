import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable'; 
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import { Product } from "./model/product.model";
import { environment } from './../environments/environment';
import { AuthService } from './auth/auth.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AppService {

  baseUrl = environment.apiUrl;
  productsList: Product[];
  private subject = new Subject<any>();

  constructor(
    private http:Http,
  ) { 
   	this.http.request(this.baseUrl + '/products')
			.subscribe((response:Response)=>{
        this.productsList = response.json();
        this.subject.next(this.productsList);
			}) 
  }

  getProduct(): Observable<any> {
    return this.subject.asObservable();
  }
  
  getProducts(name: string): Observable<Product[]> { 
    this.subject.next(this.filterProducts(name))
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
@Injectable()
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: Http, private auth: AuthService) { }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post(url: string, body: Object) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: Object) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete(url: string) {
    return this.request(url, RequestMethod.Delete);
  }

  request(url: string, method: RequestMethod, body?: Object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.auth.token}`);

    const requestOptions = new RequestOptions({
      url: `${this.baseUrl}/${url}`,
      method: method,
      headers: headers
    });

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);

    return this.http.request(request)
      .map((res: Response) => res.json())
      .catch((res: Response) => this.onRequestError(res));
  }

  onRequestError(res: Response) {
    const statusCode = res.status;
    const body = res.json();

    const error = {
      statusCode: statusCode,
      error: body.error
    };

    console.log(error);

    return Observable.throw(error);
  }

}


/* 
@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(message: string) {
      console.log('1');
      this.subject.next({ text: message });
    }

    clearMessage() {
      console.log('2');
      this.subject.next();
    }

    getMessage(): Observable<any> {
      console.log('3');
      return this.subject.asObservable();
    }
}

 */