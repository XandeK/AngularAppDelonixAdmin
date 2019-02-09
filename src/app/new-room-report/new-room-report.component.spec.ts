import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoomReportComponent } from './new-room-report.component';

describe('NewRoomReportComponent', () => {
  let component: NewRoomReportComponent;
  let fixture: ComponentFixture<NewRoomReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoomReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoomReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
