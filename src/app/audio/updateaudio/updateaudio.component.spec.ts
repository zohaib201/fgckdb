import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaudioComponent } from './updateaudio.component';

describe('UpdateaudioComponent', () => {
  let component: UpdateaudioComponent;
  let fixture: ComponentFixture<UpdateaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
