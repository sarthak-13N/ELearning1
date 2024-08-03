import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor() {}

  onSubmit() {
    const contactFormData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

   
  }
}
