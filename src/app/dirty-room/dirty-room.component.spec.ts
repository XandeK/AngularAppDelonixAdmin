import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyRoomComponent } from './dirty-room.component';

describe('DirtyRoomComponent', () => {
  let component: DirtyRoomComponent;
  let fixture: ComponentFixture<DirtyRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtyRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
