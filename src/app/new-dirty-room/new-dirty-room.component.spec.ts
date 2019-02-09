import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirtyRoomComponent } from './new-dirty-room.component';

describe('NewDirtyRoomComponent', () => {
  let component: NewDirtyRoomComponent;
  let fixture: ComponentFixture<NewDirtyRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDirtyRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDirtyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
