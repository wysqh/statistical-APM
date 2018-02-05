import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxRequestControlComponent } from './max-request-control.component';

describe('MaxRequestControlComponent', () => {
  let component: MaxRequestControlComponent;
  let fixture: ComponentFixture<MaxRequestControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxRequestControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxRequestControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
