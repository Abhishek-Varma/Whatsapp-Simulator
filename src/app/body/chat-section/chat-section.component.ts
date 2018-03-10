import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent implements OnInit {

  messages = null;
  constructor() { }

  ngOnInit() {
    this.messages = [{ "date": "99/99/9999", "messages":[{"time":"22:14","name":"Rikku","messageString":"<Media omitted>\n","id":1},{"time":"22:14","name":"Rikku","messageString":"<Media omitted>\n","id":1},{"time":"22:16","name":"The Dark Knight","messageString":"Hahaha. ����.\n","id":2}]}];  
  }

}
