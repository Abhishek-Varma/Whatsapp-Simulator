import { Component, OnInit, ElementRef, Input } from '@angular/core';

//import { MESSAGES } from './mock-messages';
import { MessageDataService } from './message-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  messages = null;
  users = [1,2];

  constructor(private messageDataService: MessageDataService, private elementRef:ElementRef) { }

  ngOnInit() {
    // Retrieve messages from the API
    this.messageDataService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  upload() {
    //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.elementRef.nativeElement.querySelector('#fileInput');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('input', inputEl.files.item(0));
            //call the angular http method
            this.messageDataService.postFile(formData).subscribe(
                //map the success function and alert the response
                 (success) => {
                         console.log('SUCCESS: '+success);
                         this.messages = success;
                },
                (error) => alert('ERROR: '+error))
          }
       }
}
