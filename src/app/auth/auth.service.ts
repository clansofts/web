import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:3000';
  nameKey = 'name';
  tokenKey = 'token';
  constructor(
    private http: Http,
    private router:Router
  ) { }
  get name() {
    return localStorage.getItem(this.nameKey);
  }
  get isAuthenticated(){
    return !!localStorage.getItem(this.tokenKey);
  }
  get tokenHeader(){
    var header = new Headers({
      'Authorization': 'Bearer ' + localStorage.getItem(this.tokenKey)
    });
    return new RequestOptions({headers: header});
  }
  login(user){
    this.http.post(this.baseUrl + '/login', user)
      .subscribe(res =>{
        var authResponse = res.json();
        if(!authResponse.token)
          return;
        localStorage.setItem(this.tokenKey, authResponse.token)
        localStorage.setItem(this.nameKey, authResponse.firstName)
        this.router.navigate(['/messages']);
      });
  }
  loginSocial(tokenServer){
    localStorage.setItem(this.tokenKey, tokenServer)
    this.router.navigate(['/messages']);
  }
  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.nameKey);
    this.router.navigate(['/login']);
  }
  recaptchaVerifier(){
    
  }
}