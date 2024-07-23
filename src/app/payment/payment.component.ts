import { Component, OnInit } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-payment',
  standalone:true,
  imports:[RouterLink,RouterModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  qrCodeDataUrl: string | undefined;

  constructor() { }

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
