import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core'; 
import { AppService } from './../app.service';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/fromEvent'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/filter'; 
import 'rxjs/add/operator/switchMap'; 
import 'rxjs/add/operator/debounceTime'; 
import 'rxjs/add/operator/distinctUntilChanged'; 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('searchInput') searchInput; 
  @ViewChild('suggestions') suggestions; 
  productNames: Array<string> = []; 
  searchInputTerm: string = ''; 

  @Output() search = new EventEmitter<string>(); 
  
  constructor(
    private appService : AppService,
    public auth:AuthService,
  ) { }

  ngOnInit() {    
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup') 
      .debounceTime(400) 
      .distinctUntilChanged() 
      .map((event: KeyboardEvent) =>  
                          (<HTMLInputElement>event.target).value) 
      .switchMap(title =>  
                      this.appService.getProductNames(title)) 
      .subscribe(productNames => this.productNames = productNames); 

    Observable.fromEvent(this.suggestions.nativeElement, 'click') 
      .map((event: KeyboardEvent) =>  
                  (<HTMLInputElement>event.srcElement).innerText) 
      .subscribe(res => { 
        this.searchInputTerm = res; 
        this.productNames = []; 
      }); 
  } 

  searchProducts() { 
    this.productNames = []; 
    this.search.emit(this.searchInputTerm);
    this.appService.getProducts(this.searchInputTerm);
    console.log('aun estoy en nav ' + this.searchInputTerm);
  } 
  
 /*  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }
 */
}