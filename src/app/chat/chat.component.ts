import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  messageText: string;
  messages: Array<any>;
  usersOnline: Array<any>;

  constructor(
    private _chatService: ChatService,
    private auth: AuthService
  ) {}
  ngOnInit() {
    this.messages = new Array();
    this._chatService.on('chatMessage', (msg) => {
        this.messages.push(msg);
      
    });
    this._chatService.on('user.hugged', (username) => {
      console.log(username + 'just hugged you.')
    });
    this._chatService.getUsers()
      .subscribe((usersOnline: any[]) => {
        this.usersOnline = usersOnline;
    });
  }
  sendMessage() {
    const message = {
      text: this.messageText,
      user: this.auth.name,
      photo: this.auth.photo
    };
    this._chatService.emit('chatMessage', message);
    this.messageText = ''
  }
  sendHug(id){
    this._chatService.emit('user.hug', id);
  }
  ngOnDestroy() {
    this._chatService.removeListener('disconnect');
  }
}
