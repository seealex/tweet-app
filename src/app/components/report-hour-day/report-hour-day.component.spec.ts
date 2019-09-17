import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHourDayComponent } from './report-hour-day.component';

describe('ReportHourDayComponent', () => {
  let component: ReportHourDayComponent;
  let fixture: ComponentFixture<ReportHourDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHourDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHourDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
