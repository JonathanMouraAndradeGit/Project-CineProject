import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCComponent } from './slider-c.component';

describe('SliderCComponent', () => {
  let component: SliderCComponent;
  let fixture: ComponentFixture<SliderCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
