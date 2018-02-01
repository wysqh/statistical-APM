import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimepickerComponent } from './my-timepicker.component';

describe('MyTimepickerComponent', () => {
  let component: MyTimepickerComponent;
  let fixture: ComponentFixture<MyTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
