import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomephotoComponent } from './homephoto.component';

describe('HomephotoComponent', () => {
  let component: HomephotoComponent;
  let fixture: ComponentFixture<HomephotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomephotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
