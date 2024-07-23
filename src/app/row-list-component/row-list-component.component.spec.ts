import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowListComponentComponent } from './row-list-component.component';

describe('RowListComponentComponent', () => {
  let component: RowListComponentComponent;
  let fixture: ComponentFixture<RowListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
