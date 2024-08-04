import { Component, OnInit } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as QRCode from 'qrcode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment',
  standalone:true,
  imports:[RouterLink,RouterModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  qrCodeDataUrl: string | undefined;

  registrationForm: FormGroup;
  // qrCodeDataUrl: string = 'assets/qr-code.png'; // Example QR code URL

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      // Perform registration logic here
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {
    this.generateQRCode('https://example.com/payment');
  }

  generateQRCode(url: string): void {
    QRCode.toDataURL(url)
      .then(dataUrl => {
        this.qrCodeDataUrl = dataUrl;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
