import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepassComponent } from './timepass.component';

describe('TimepassComponent', () => {
  let component: TimepassComponent;
  let fixture: ComponentFixture<TimepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimepassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
