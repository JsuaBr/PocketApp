import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroComponentComponent } from './pomodoro-component.component';

describe('PomodoroComponentComponent', () => {
  let component: PomodoroComponentComponent;
  let fixture: ComponentFixture<PomodoroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PomodoroComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomodoroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
