import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCad1Component } from './form-cad1.component';

describe('FormCad1Component', () => {
  let component: FormCad1Component;
  let fixture: ComponentFixture<FormCad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCad1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
