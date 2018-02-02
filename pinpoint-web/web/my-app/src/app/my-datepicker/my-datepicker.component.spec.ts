import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDatepickerComponent } from './my-datepicker.component';

describe('MyDatepickerComponent', () => {
  let component: MyDatepickerComponent;
  let fixture: ComponentFixture<MyDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
