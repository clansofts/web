import { Component, OnInit } from '@angular/core';
import { CartComponent } from './../cart/cart.component';

//import { AuthService } from './../auth/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    //private auth:AuthService
  ) { }

  ngOnInit() {
  }

}