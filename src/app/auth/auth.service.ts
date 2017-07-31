import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {
  baseUrl = environment.apiUrl;
  nameKey = 'name';
  photoKey = 'photo';
  tokenKey = 'token';
  constructor(
    private http: Http,
    private router:Router
  ) { }
  get name() {
    return localStorage.getItem(this.nameKey);
  }
  get photo() {
    return localStorage.getItem(this.photoKey);
  }
  get token() {
    return localStorage.getItem(this.tokenKey);
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
    this.http.post(this.baseUrl + '/oauth/login', user)
      .subscribe(res =>{
        var authResponse = res.json();
        console.log(authResponse)
        if(!authResponse.token)
          return;
        localStorage.setItem(this.tokenKey, authResponse.token)
        localStorage.setItem(this.nameKey, authResponse.firstName + authResponse.lastName)
        this.router.navigate(['']);
      });
  }
  loginSocial(tokenServer){
    localStorage.setItem(this.tokenKey, tokenServer)
    this.http.get(this.baseUrl + '/oauth/user/me', this.tokenHeader).subscribe(res =>{
      var authResponse = res.json();
      localStorage.setItem(this.nameKey, authResponse.firstName + ' ' + authResponse.lastName)
      localStorage.setItem(this.photoKey, authResponse.photo)
      this.router.navigate(['']);
    });
    
    
  }
  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.nameKey);
    this.router.navigate(['/login']);
  }
  recaptchaVerifier(){
    
  }
}