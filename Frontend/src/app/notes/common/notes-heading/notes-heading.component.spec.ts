import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesHeadingComponent } from './notes-heading.component';

describe('NotesHeadingComponent', () => {
  let component: NotesHeadingComponent;
  let fixture: ComponentFixture<NotesHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
