import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFgckFormComponent } from './add-fgck-form.component';

describe('AddFgckFormComponent', () => {
  let component: AddFgckFormComponent;
  let fixture: ComponentFixture<AddFgckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFgckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFgckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
