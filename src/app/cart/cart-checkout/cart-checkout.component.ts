import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../app.service';
import { NgForm } from '@angular/forms';
import { Address } from './../../shared/address.model';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  loading: Boolean = false;
  newAddress: Address;
  cartKey = 'cart';
  products= JSON.parse(localStorage.getItem(this.cartKey));
  submitted = false;
  paymentMethods = ['Efectivo', 'Datafono'];
  


  constructor(
    public auth: AuthService,
    public api: ApiService,
  ) { }



  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.loading = true;
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
        this.loading = false;
        this.newAddress = data.address[0];
        console.log(this.newAddress)
      });
  }

  enviarOrden(){
    var order = { 
      products: this.products,
      paymethod: 'Efectivo',
      address: this.newAddress._id
    }
    this.api.post('orders', order).subscribe();
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
