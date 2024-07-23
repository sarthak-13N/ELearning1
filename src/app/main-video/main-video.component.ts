import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MainContentComponent } from '../main-content/main-content.component';
import { SafePipe } from './safe.pipe';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-content',
  standalone:true,
  imports:[],
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})

export class MainVideoComponent {

  selectedVideo: any;

  onVideoSelected(video: any) {
    this.selectedVideo = video;
  }
}
