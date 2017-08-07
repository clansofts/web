import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../app.service';
import { CartService } from './../cart.service';
import { NgForm } from '@angular/forms';
import { Address } from './../../shared/address.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  
  cartKey = 'cart';
  paymentMethods = ['Efectivo', 'Datafono'];
  Addresses: Address;
  newAddress: Address;
  direcciones: Boolean;
  submitted:Boolean = false;
  direccionDeEntrega:Number;

  constructor(
    public auth: AuthService,
    public api: ApiService,
    public router: Router,
    public cart: CartService
  ) { }

  ngOnInit() {
    this.api.get('address').subscribe(data => {
      this.Addresses = data.addresses;
      this.direcciones= data.message;
    });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    const formValues = Object.assign({}, form.value);
    const address: Address = {
      line_1: `${formValues.line_1}`,
      line_2: `${formValues.line_2}`,
      line_3: `${formValues.line_3}`,
      phone_1: `${formValues.phone_1}`,
      phone_2: `${formValues.phone_2}`,
    };
    this.api.post('address', address)
      .subscribe(data => {
        form.reset();
        this.newAddress = data;
        this.direccionDeEntrega = data._id;
      });
  }
  direccionId(id:Number){
    this.direccionDeEntrega = id;  
    this.submitted=true
    console.log(this.direccionDeEntrega)
  }
  enviarOrden(paymethod?: String){
    var products= JSON.parse(localStorage.getItem(this.cartKey));
    var order = { 
      products: products,
      paymethod: paymethod,
      address: this.direccionDeEntrega
    }
    this.api.post('orders', order).subscribe();
    this.cart.clear();
    this.router.navigate(['/orders']);
  }


 
  /* initMap(){
    if ("geolocation" in navigator) {
      var watchID = navigator.geolocation.watchPosition(function(position) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: position.coords.latitude, 
            lng: position.coords.longitude
          },
          zoom: 16
        }); 
        console.log(position.coords.latitude, position.coords.longitude)
      });
    } else {
      console.log('geo no disponible')
    }
  } */
}
