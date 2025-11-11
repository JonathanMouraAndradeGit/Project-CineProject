import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressInfoV1Component } from './progress-info-v1.component';

describe('ProgressInfoV1Component', () => {
  let component: ProgressInfoV1Component;
  let fixture: ComponentFixture<ProgressInfoV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressInfoV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressInfoV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
