import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaudioComponent } from './addaudio.component';

describe('AddaudioComponent', () => {
  let component: AddaudioComponent;
  let fixture: ComponentFixture<AddaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
