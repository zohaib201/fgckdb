import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedevotionalComponent } from './deletedevotional.component';

describe('DeletedevotionalComponent', () => {
  let component: DeletedevotionalComponent;
  let fixture: ComponentFixture<DeletedevotionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedevotionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
