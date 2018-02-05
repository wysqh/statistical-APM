import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPerformanceStatisticsComponent } from './last-performance-statistics.component';

describe('LastPerformanceStatisticsComponent', () => {
  let component: LastPerformanceStatisticsComponent;
  let fixture: ComponentFixture<LastPerformanceStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPerformanceStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPerformanceStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
