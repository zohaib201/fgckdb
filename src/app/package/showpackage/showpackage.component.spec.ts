import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpackageComponent } from './showpackage.component';

describe('ShowpackageComponent', () => {
  let component: ShowpackageComponent;
  let fixture: ComponentFixture<ShowpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
