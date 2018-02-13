import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UriPerformanceCheckComponent } from './uri-performance-check.component';

describe('UriPerformanceCheckComponent', () => {
  let component: UriPerformanceCheckComponent;
  let fixture: ComponentFixture<UriPerformanceCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UriPerformanceCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UriPerformanceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
