import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTopFiveComponent } from './report-top-five.component';

describe('ReportTopFiveComponent', () => {
  let component: ReportTopFiveComponent;
  let fixture: ComponentFixture<ReportTopFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTopFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTopFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
