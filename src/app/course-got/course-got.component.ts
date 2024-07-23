import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { CourseService, Course } from './course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './course-got.component.html',
  styleUrls: ['./course-got.component.css']
})
export class CourseGotComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}
