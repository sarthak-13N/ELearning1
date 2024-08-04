import { Component, OnInit,TemplateRef, ViewChild  } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { CourseService, Course } from './course.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,NgFor],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @ViewChild('courseInfoTemplate') courseInfoTemplate!: TemplateRef<any>;
  
  // constructor(private dialog: MatDialog) {}

  courses: any[] = [
    {
      name: 'JavaScript',
      imageUrl: 'data:image/png;base64,/9j/',
      description: 'Learn JavaScript from scratch.',
      price: 19.99,
      modules: [
        { title: 'Introduction', description: 'Getting started with JavaScript' },
        { title: 'Functions', description: 'Understanding functions' }
      ]
    },
  ];
  
  selectedCourse: any;
  constructor(private courseService: CourseService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  openCourseInfo(course: any): void {
    this.selectedCourse = course;
    this.dialog.open(this.courseInfoTemplate);
  }
}
