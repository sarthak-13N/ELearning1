import { Component , Input} from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component'
@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [NavBarComponent,Input],
  templateUrl: './course-player.component.html',
  styleUrl: './course-player.component.css'
})
export class CoursePlayerComponent {

  @Input() courseName!: string; 
}
