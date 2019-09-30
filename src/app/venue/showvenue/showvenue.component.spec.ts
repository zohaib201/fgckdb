import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvenueComponent } from './showvenue.component';

describe('ShowvenueComponent', () => {
  let component: ShowvenueComponent;
  let fixture: ComponentFixture<ShowvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowvenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
