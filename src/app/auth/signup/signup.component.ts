import { Component, OnInit } from '@angular/core';
interface User { 
  firstName: string; 
  lastName: string; 
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = { 
    firstName: 'Shravan', 
    lastName: 'Kasagoni' 
  } 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formValue) { 
    console.log(formValue); 
  }

}
