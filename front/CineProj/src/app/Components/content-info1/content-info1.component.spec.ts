import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfo1Component } from './content-info1.component';

describe('ContentInfo1Component', () => {
  let component: ContentInfo1Component;
  let fixture: ComponentFixture<ContentInfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentInfo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
