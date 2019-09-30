import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFromAppComponent } from './member-from-app.component';

describe('MemberFromAppComponent', () => {
  let component: MemberFromAppComponent;
  let fixture: ComponentFixture<MemberFromAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFromAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFromAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
