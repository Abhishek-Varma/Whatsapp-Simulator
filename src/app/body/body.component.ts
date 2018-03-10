import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //messages = null;
  users = [1,2];
  constructor() { }

  ngOnInit() {
    //this.messages = [{ "date": "99/99/9999", "messages":[{"time":"22:14","name":"Rikku","messageString":"<Media omitted>\n","id":1},{"time":"22:14","name":"Rikku","messageString":"<Media omitted>\n","id":1},{"time":"22:16","name":"The Dark Knight","messageString":"Hahaha. ����.\n","id":2}]}];
  }

}
