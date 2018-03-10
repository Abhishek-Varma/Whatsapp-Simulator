import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { TopSectionComponent } from './body/top-section/top-section.component';
import { ChatSectionComponent } from './body/chat-section/chat-section.component';
import { BottomSectionComponent } from './body/bottom-section/bottom-section.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent,
    TopSectionComponent,
    ChatSectionComponent,
    BottomSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
