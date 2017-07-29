import { Component, OnInit, ViewChild, Input } from '@angular/core'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/fromEvent'; 
import 'rxjs/add/operator/map'; 
import { AppService } from './../app.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   @ViewChild('searchInput') searchInput; 
  productNames: Array<string>; 
  
  constructor(
    private appService : AppService,
    public auth:AuthService
  ) { }

  ngOnInit() { 
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup') 
    .map((event: KeyboardEvent)=>(<HTMLInputElement>event.target).value) 
    .subscribe(name =>  
      this.appService.getProductNames(name) 
          .subscribe(productNames=>this.productNames = productNames
          )); 

  } 

}