import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputType1Component } from './input-type1.component';

describe('InputType1Component', () => {
  let component: InputType1Component;
  let fixture: ComponentFixture<InputType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputType1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
