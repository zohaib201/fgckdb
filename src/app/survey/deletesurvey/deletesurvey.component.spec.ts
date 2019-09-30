import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesurveyComponent } from './deletesurvey.component';

describe('DeletesurveyComponent', () => {
  let component: DeletesurveyComponent;
  let fixture: ComponentFixture<DeletesurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletesurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
