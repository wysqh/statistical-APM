import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UriQueryControlComponent } from './uri-query-control.component';

describe('UriQueryControlComponent', () => {
  let component: UriQueryControlComponent;
  let fixture: ComponentFixture<UriQueryControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UriQueryControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UriQueryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
