import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithSidebarComponent } from './layout-with-sidebar.component';

describe('LayoutWithSidebarComponent', () => {
  let component: LayoutWithSidebarComponent;
  let fixture: ComponentFixture<LayoutWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWithSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
