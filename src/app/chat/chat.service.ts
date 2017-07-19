//import 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

//import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class ChatService {
  private socket: any;
  constructor(
    private router:Router, 
    private auth: AuthService
  ) { 
    this.socket = io.connect('http://localhost:3000', {
      'query': 'token=' + this.auth.token
  });


/*       if (this._authenticationService.isLoggedIn()) {
        this.socket = io();
      } else {
        this._router.navigate(['login']);
      }   */  
  }
  on(eventName, callback) {
    if (this.socket) {
      this.socket.on(eventName, function(data) {
        callback(data);
      });
    }
  };

  emit(eventName: any, data: any) {
      if (this.socket) {
        this.socket.emit(eventName, data);
      }
    };

  removeListener(eventName) {
    if (this.socket) {
      this.socket.removeListener(eventName);
    }
  };
}