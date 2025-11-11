import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsComp1Component } from './steps-comp1.component';

describe('StepsComp1Component', () => {
  let component: StepsComp1Component;
  let fixture: ComponentFixture<StepsComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsComp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
