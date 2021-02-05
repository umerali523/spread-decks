import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioValuationComponent } from './portfolio-valuation.component';

describe('PortfolioValuationComponent', () => {
  let component: PortfolioValuationComponent;
  let fixture: ComponentFixture<PortfolioValuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioValuationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
