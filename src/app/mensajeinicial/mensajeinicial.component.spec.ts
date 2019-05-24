import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeinicialComponent } from './mensajeinicial.component';

describe('MensajeinicialComponent', () => {
  let component: MensajeinicialComponent;
  let fixture: ComponentFixture<MensajeinicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeinicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
