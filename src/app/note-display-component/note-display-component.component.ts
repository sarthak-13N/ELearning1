import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { Note, Row } from './note.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-note-display',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './note-display-component.component.html',
  styleUrls: ['./note-display-component.component.css']
})
export class NoteDisplayComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.selectedRow$.subscribe(row => {
      if (row) {
        this.notes = row.notes;
      }
    });
  }
}
