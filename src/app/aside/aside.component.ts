import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone:true,
  imports:[NgFor],
  
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  chapters = [
    {
      title: 'Chapter 1',
      videos: [
        { id: 'video1', title: 'Topic 1', notes: '' },
        { id: 'video2', title: 'Topic 2', notes: '' }
      ]
    },
    {
      title: 'Chapter 2',
      videos: [
        { id: 'video1', title: 'Topic 1', notes: 'https://example.com/notes1.pdf' },
        { id: 'video2', title: 'Topic 2', notes: 'https://example.com/notes2.pdf' }
      ]
    },
    {
      title: 'Chapter 3',
      videos: [
        { id: 'video1', title: 'Topic 1', notes: 'https://example.com/notes1.pdf' },
        { id: 'video2', title: 'Topic 2', notes: 'https://example.com/notes2.pdf' }
      ]
    },
    {
      title: 'Chapter 4',
      videos: [
        { id: 'video1', title: 'Topic 1', notes: 'https://example.com/notes1.pdf' },
        { id: 'video2', title: 'Topic 2', notes: 'https://example.com/notes2.pdf' }
      ]
    },
    {
      title: 'Chapter 1',
      videos: [
        { id: 'video1', title: 'Topic 1', notes: 'https://example.com/notes1.pdf' },
        { id: 'video2', title: 'Topic 2', notes: 'https://example.com/notes2.pdf' }
      ]
    },
  ];

  videos = [
    { id: 'video1', path: '/Users/sumedhkedari/Desktop/VediosWala/Untitled 3.png' },
    { id: 'video2', path: '/Users/sumedhkedari/Desktop/VediosWala/Untitled 3.png' }
    // More videos...
  ];

  ngOnInit(): void {
    // Initialization logic...
  }

  playVideo(videoId: string, notesSrc: string): void {
    const videoPlayer: HTMLVideoElement = document.getElementById('videoPlayer') as HTMLVideoElement;
    const notesFrame: HTMLIFrameElement = document.getElementById('notesFrame') as HTMLIFrameElement;
    const notesTitle: HTMLElement = document.getElementById('notesTitle') as HTMLElement;

    const selectedVideo = this.videos.find(video => video.id === videoId);

    if (selectedVideo) {
      videoPlayer.src = selectedVideo.path;
      videoPlayer.play();

      notesFrame.src = notesSrc;
      const chapterNumber = videoId.slice(-2, -1); // Extract chapter number
      const topicNumber = videoId.slice(-1); // Extract topic number
      notesTitle.textContent = `Chapter ${chapterNumber} Topic ${topicNumber} Notes`;
    }
  }
}
