import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeProblemComponent } from './grade-problem.component';

describe('GradeProblemComponent', () => {
  let component: GradeProblemComponent;
  let fixture: ComponentFixture<GradeProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
