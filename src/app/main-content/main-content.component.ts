import { Component, OnInit } from '@angular/core';
import {SafePipe} from '../main-video/safe.pipe'
@Component({
  selector: 'app-main-content',
  // standalone:true,
  // imports:[SafePipe],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  selectedVideo: any;

  onVideoSelected(video: any) {
    this.selectedVideo = video;
  }
}
