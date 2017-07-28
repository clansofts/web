import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/fromEvent'; 
import 'rxjs/add/operator/map'; 
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput') searchInput; 
  productNames: Array<string>; 
  
  constructor(
    private searchService : SearchService
  ) { }

  ngOnInit() { 
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup') 
    .map((event: KeyboardEvent)=>(<HTMLInputElement>event.target).value) 
    .subscribe(name =>  
      this.searchService.getProductNames(name) 
          .subscribe(productNames=>this.productNames = productNames
          )); 

  } 
}