import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UriPerformanceQueryComponent } from './uri-performance-query.component';

describe('UriPerformanceQueryComponent', () => {
  let component: UriPerformanceQueryComponent;
  let fixture: ComponentFixture<UriPerformanceQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UriPerformanceQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UriPerformanceQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
