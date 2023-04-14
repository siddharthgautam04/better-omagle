import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextMessageComponent } from './text-message/text-message.component';
import { HomePageBodyComponent } from './home-page-body/home-page-body.component';
import { VideoComponent } from './video/video.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';

const routes: Routes = [
  {
    component:HomePageBodyComponent,
    path:""
  },
  {
    component:TextMessageComponent,
    path:'text'
  },
  {
    component:VideoComponent,
    path:"video"
  },
  {
    component:LiveStreamComponent,
    path:"live-stream"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
