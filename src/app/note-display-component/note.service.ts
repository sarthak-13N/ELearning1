import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Row } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private selectedRowSubject = new BehaviorSubject<Row | null>(null);
  selectedRow$ = this.selectedRowSubject.asObservable();

  setSelectedRow(row: Row): void {
    this.selectedRowSubject.next(row);
  }
}
