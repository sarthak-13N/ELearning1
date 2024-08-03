import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MainContentComponent } from '../main-content/main-content.component';
import { SafePipe } from './safe.pipe';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NoteDisplayComponent } from '../note-display-component/note-display-component.component';
import { Router,RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,NoteDisplayComponent,SidebarComponent],
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})

export class MainVideoComponent {

  selectedVideo: any;

  onVideoSelected(video: any) {
    this.selectedVideo = video;
  }
}
