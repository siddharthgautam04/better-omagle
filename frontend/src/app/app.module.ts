import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextMessageComponent } from './text-message/text-message.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageBodyComponent } from './home-page-body/home-page-body.component';
import { VideoComponent } from './video/video.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextMessageComponent,
    FooterComponent,
    HomePageBodyComponent,
    VideoComponent,
    LiveStreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
