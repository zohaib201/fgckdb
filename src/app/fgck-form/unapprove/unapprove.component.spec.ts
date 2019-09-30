import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapproveComponent } from './unapprove.component';

describe('UnapproveComponent', () => {
  let component: UnapproveComponent;
  let fixture: ComponentFixture<UnapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
