import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDynamicComponent } from './display-dynamic.component';

describe('DisplayDynamicComponent', () => {
  let component: DisplayDynamicComponent;
  let fixture: ComponentFixture<DisplayDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
