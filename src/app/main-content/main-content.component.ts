import { Component, OnInit } from '@angular/core';
import {SafePipe} from '../main-video/safe.pipe'
;
import { NoteService } from '../note-display-component/note.service';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { Row } from '../note-display-component/note.model';


import { SidebarComponent } from '../sidebar/sidebar.component';
import { NoteDisplayComponent } from '../note-display-component/note-display-component.component';
@Component({
  selector: 'app-main-content',
  standalone:true,
  imports:[SidebarComponent,NoteDisplayComponent,CommonModule,],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  selectedVideo: any;

  onVideoSelected(video: any) {
    this.selectedVideo = video;
  }
}
