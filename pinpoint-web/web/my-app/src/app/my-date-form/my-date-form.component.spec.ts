import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDateFormComponent } from './my-date-form.component';

describe('MyDateFormComponent', () => {
  let component: MyDateFormComponent;
  let fixture: ComponentFixture<MyDateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
