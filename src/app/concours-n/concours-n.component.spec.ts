import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursNComponent } from './concours-n.component';

describe('ConcoursNComponent', () => {
  let component: ConcoursNComponent;
  let fixture: ComponentFixture<ConcoursNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcoursNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
