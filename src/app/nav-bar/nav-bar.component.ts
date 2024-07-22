import { Component } from '@angular/core';
import {RouterLink, RouterModule, Routes } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
