import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../app.service';
import { Category } from './../../shared/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categories: Category[];
  constructor(
    public api : ApiService
  ) { }

  ngOnInit() {
    this.api.get('categories').subscribe(data => this.categories = data)
  }


}
