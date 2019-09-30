import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedevotionalComponent } from './updatedevotional.component';

describe('UpdatedevotionalComponent', () => {
  let component: UpdatedevotionalComponent;
  let fixture: ComponentFixture<UpdatedevotionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedevotionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
