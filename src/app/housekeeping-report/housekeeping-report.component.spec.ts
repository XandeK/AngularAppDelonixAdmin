import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingReportComponent } from './housekeeping-report.component';

describe('HousekeepingReportComponent', () => {
  let component: HousekeepingReportComponent;
  let fixture: ComponentFixture<HousekeepingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousekeepingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
