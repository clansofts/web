import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

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
