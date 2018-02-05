import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryControlComponent } from './query-control.component';

describe('QueryControlComponent', () => {
  let component: QueryControlComponent;
  let fixture: ComponentFixture<QueryControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
