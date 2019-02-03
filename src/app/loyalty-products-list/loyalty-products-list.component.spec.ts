import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyProductsListComponent } from './loyalty-products-list.component';

describe('LoyaltyProductsListComponent', () => {
  let component: LoyaltyProductsListComponent;
  let fixture: ComponentFixture<LoyaltyProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
