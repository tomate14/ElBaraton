import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhojaComponent } from './menuhoja.component';

describe('MenuhojaComponent', () => {
  let component: MenuhojaComponent;
  let fixture: ComponentFixture<MenuhojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
