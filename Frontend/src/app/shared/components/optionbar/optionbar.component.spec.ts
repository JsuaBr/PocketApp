import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionbarComponent } from './optionbar.component';

describe('OptionbarComponent', () => {
  let component: OptionbarComponent;
  let fixture: ComponentFixture<OptionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
