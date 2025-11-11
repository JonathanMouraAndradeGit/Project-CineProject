import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderType2Component } from './slider-type2.component';

describe('SliderType2Component', () => {
  let component: SliderType2Component;
  let fixture: ComponentFixture<SliderType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderType2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
