import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinchargeComponent } from './getincharge.component';

describe('GetinchargeComponent', () => {
  let component: GetinchargeComponent;
  let fixture: ComponentFixture<GetinchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
