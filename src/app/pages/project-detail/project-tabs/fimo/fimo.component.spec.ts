import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FimoComponent } from './fimo.component';

describe('FimoComponent', () => {
  let component: FimoComponent;
  let fixture: ComponentFixture<FimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
