import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTLCComponent } from './side-tlc.component';

describe('SideTLCComponent', () => {
  let component: SideTLCComponent;
  let fixture: ComponentFixture<SideTLCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideTLCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
