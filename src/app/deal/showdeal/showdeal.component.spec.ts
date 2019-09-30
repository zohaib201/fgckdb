import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdealComponent } from './showdeal.component';

describe('ShowdealComponent', () => {
  let component: ShowdealComponent;
  let fixture: ComponentFixture<ShowdealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
