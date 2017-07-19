import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  messageText: string;
  messages: Array<any>;

  constructor(
    private _chatService: ChatService,
    private auth: AuthService
  ) {}
  
  ngOnInit() {
    this.messages = new Array();
    
    this._chatService.on('chatMessage', (msg) => {
      this.messages.push(msg);

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

  ngOnDestroy() {
    this._chatService.removeListener('chatMessage');
  }
}
