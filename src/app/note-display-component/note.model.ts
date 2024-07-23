export interface Note {
    id: number;
    title: string;
    url: string; // URL to the PDF file
  }
  
  export interface Row {
    id: number;
    title: string;
    notes: Note[];
  }
  