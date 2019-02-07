import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoomRateComponent } from './new-room-rate.component';

describe('NewRoomRateComponent', () => {
  let component: NewRoomRateComponent;
  let fixture: ComponentFixture<NewRoomRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoomRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoomRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
