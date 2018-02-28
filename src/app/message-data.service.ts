import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import 'rxjs/add/operator/map';

const URL = '/api';

@Injectable()
export class MessageDataService {

  constructor(private http: Http) { }

  // Get message JSON from input file
  getMessages() {
  	return this.http.get(URL)
  		.map((res:Response) => res.json());
  }

  postFile(fileData) {
  	return this.http.post(URL,fileData)
  		.map((res:Response) => res.json());
  }
}
