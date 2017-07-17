import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { MapsComponent } from './../../users/maps/maps.component'

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }


}
