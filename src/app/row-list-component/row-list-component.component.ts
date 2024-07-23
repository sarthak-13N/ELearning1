import { Component } from '@angular/core';
import { NoteDisplayComponent } from '../note-display-component/note-display-component.component';
import { NoteService } from '../note-display-component/note.service';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { Row } from '../note-display-component/note.model';


@Component({
  selector: 'app-row-list-component',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,NoteDisplayComponent],
  templateUrl: './row-list-component.component.html',
  styleUrl: './row-list-component.component.css'
})
export class RowListComponentComponent {

  rows: Row[] = [
    {
      id: 1,
      title: 'Row 1',
      notes: [
        { id: 1, title: 'Notes 1', url: 'assets/notes1.pdf' },
        { id: 2, title: 'Notes 2', url: 'assets/notes2.pdf' }
      ]
    },
    {
      id: 2,
      title: 'Row 2',
      notes: [
        { id: 3, title: 'Notes 3', url: 'assets/notes3.pdf' },
        { id: 4, title: 'Notes 4', url: 'assets/notes4.pdf' }
      ]
    }
  ];

  constructor(private noteService: NoteService) { }

  selectRow(row: Row): void {
    this.noteService.setSelectedRow(row);
  }
}
