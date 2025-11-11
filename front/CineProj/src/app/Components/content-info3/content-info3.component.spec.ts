import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfo3Component } from './content-info3.component';

describe('ContentInfo3Component', () => {
  let component: ContentInfo3Component;
  let fixture: ComponentFixture<ContentInfo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentInfo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
