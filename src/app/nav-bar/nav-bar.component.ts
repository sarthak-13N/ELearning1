import { Component } from '@angular/core';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add CommonModule to imports


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink], 
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'] 
})
export class NavBarComponent {

  constructor(private router: Router) { }

  onItemClick(courseName: string): void {
    let randomInt: boolean= true; 
    if(randomInt == true)
    {
      this.router.navigate(['/course']);
    }else{
      this.router.navigate(['/login']);
    }
    console.log(courseName);
  }
}
