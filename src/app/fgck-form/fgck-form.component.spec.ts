import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgckFormComponent } from './fgck-form.component';

describe('FgckFormComponent', () => {
  let component: FgckFormComponent;
  let fixture: ComponentFixture<FgckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
