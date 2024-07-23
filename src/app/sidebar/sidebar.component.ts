import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Video {
  id: string;
  title: string;
  path: string;
  notes: string;
}

interface Chapter {
  title: string;
  videos: Video[];
}

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() videoSelected = new EventEmitter<Video>();

  chapters: Chapter[] = [
    {
      title: 'Chapter 1',
      videos: [
        { id: 'video1', title: 'Introduction', path: 'path/to/video1.mp4', notes: 'https://example.com/notes1.pdf' },
        { id: 'video2', title: 'Getting Started', path: 'path/to/video2.mp4', notes: 'https://example.com/notes2.pdf' }
      ]
    },
    {
      title: 'Chapter 2',
      videos: [
        { id: 'video3', title: 'Advanced Topics', path: 'path/to/video3.mp4', notes: 'https://example.com/notes3.pdf' }
      ]
    }
  ];

  playVideo(video: Video) {
    this.videoSelected.emit(video);
  }
}
