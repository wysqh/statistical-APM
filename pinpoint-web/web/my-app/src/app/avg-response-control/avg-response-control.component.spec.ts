import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgResponseControlComponent } from './avg-response-control.component';

describe('AvgResponseControlComponent', () => {
  let component: AvgResponseControlComponent;
  let fixture: ComponentFixture<AvgResponseControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgResponseControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgResponseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
