import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevenueComponent } from './updatevenue.component';

describe('UpdatevenueComponent', () => {
  let component: UpdatevenueComponent;
  let fixture: ComponentFixture<UpdatevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
