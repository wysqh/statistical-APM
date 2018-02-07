import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularSampleComponent } from './nebular-sample.component';

describe('NebularSampleComponent', () => {
  let component: NebularSampleComponent;
  let fixture: ComponentFixture<NebularSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebularSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
