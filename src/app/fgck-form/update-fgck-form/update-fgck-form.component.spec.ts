import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFgckFormComponent } from './update-fgck-form.component';

describe('UpdateFgckFormComponent', () => {
  let component: UpdateFgckFormComponent;
  let fixture: ComponentFixture<UpdateFgckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFgckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFgckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
