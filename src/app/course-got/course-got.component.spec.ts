import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGotComponent } from './course-got.component';

describe('CourseGotComponent', () => {
  let component: CourseGotComponent;
  let fixture: ComponentFixture<CourseGotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseGotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseGotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
