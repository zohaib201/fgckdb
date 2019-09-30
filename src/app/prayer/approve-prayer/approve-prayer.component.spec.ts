import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePrayerComponent } from './approve-prayer.component';

describe('ApprovePrayerComponent', () => {
  let component: ApprovePrayerComponent;
  let fixture: ComponentFixture<ApprovePrayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePrayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
