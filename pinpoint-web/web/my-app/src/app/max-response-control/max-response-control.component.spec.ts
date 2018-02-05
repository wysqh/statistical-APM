import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxResponseControlComponent } from './max-response-control.component';

describe('MaxResponseControlComponent', () => {
  let component: MaxResponseControlComponent;
  let fixture: ComponentFixture<MaxResponseControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxResponseControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxResponseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
