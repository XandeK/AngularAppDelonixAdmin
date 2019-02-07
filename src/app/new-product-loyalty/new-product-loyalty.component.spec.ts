import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductLoyaltyComponent } from './new-product-loyalty.component';

describe('NewProductLoyaltyComponent', () => {
  let component: NewProductLoyaltyComponent;
  let fixture: ComponentFixture<NewProductLoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductLoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
