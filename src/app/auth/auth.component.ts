import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, ParamMap, RouterState  } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form;
  id;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public afAuth: AngularFireAuth
  ) { 
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        var token = this.id = params['token'];
        if (token!==undefined){
          this.auth.loginSocial(token);
        }
    });
  }
  onSubmit(){
    this.auth.login(this.form.value);
  }
  loginSMS(){
    
  }
}