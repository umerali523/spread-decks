import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryOwnerComponent } from './secondary-owner.component';

describe('SecondaryOwnerComponent', () => {
  let component: SecondaryOwnerComponent;
  let fixture: ComponentFixture<SecondaryOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
