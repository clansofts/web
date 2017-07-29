import { Component, OnInit } from '@angular/core';
import { Hero } from './../../model/hero.model';
declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  newHero() {
    //this.model = new Hero(42, '', '');
  }

  ngOnInit() {
   this.initMap();
  }
  initMap(){
    if ("geolocation" in navigator) {
      var watchID = navigator.geolocation.watchPosition(function(position) {
        /* var map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: position.coords.latitude, 
            lng: position.coords.longitude
          },
          zoom: 16
        }); */
        console.log(position.coords.latitude, position.coords.longitude)
      });
    } else {
      console.log('geo no disponible')
    }
  }

}
