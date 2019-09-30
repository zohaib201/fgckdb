import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevotionalComponent } from './adddevotional.component';

describe('AdddevotionalComponent', () => {
  let component: AdddevotionalComponent;
  let fixture: ComponentFixture<AdddevotionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevotionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
