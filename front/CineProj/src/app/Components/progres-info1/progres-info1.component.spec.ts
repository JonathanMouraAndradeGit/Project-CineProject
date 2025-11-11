import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresInfo1Component } from './progres-info1.component';

describe('ProgresInfo1Component', () => {
  let component: ProgresInfo1Component;
  let fixture: ComponentFixture<ProgresInfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgresInfo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
