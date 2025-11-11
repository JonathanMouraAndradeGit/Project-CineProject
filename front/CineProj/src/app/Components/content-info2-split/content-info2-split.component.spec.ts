import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfo2SplitComponent } from './content-info2-split.component';

describe('ContentInfo2SplitComponent', () => {
  let component: ContentInfo2SplitComponent;
  let fixture: ComponentFixture<ContentInfo2SplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentInfo2SplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInfo2SplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
