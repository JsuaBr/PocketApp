import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryHeadingComponent } from './diary-heading.component';

describe('DiaryHeadingComponent', () => {
  let component: DiaryHeadingComponent;
  let fixture: ComponentFixture<DiaryHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
