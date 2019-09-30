import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletenotificationComponent } from './deletenotification.component';

describe('DeletenotificationComponent', () => {
  let component: DeletenotificationComponent;
  let fixture: ComponentFixture<DeletenotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletenotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
