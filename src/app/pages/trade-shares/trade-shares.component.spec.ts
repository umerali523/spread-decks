import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSharesComponent } from './trade-shares.component';

describe('TradeSharesComponent', () => {
  let component: TradeSharesComponent;
  let fixture: ComponentFixture<TradeSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
