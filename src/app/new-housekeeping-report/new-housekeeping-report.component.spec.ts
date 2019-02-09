import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHousekeepingReportComponent } from './new-housekeeping-report.component';

describe('NewHousekeepingReportComponent', () => {
  let component: NewHousekeepingReportComponent;
  let fixture: ComponentFixture<NewHousekeepingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHousekeepingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHousekeepingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
