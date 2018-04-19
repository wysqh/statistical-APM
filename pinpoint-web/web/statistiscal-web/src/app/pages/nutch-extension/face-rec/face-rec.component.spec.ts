import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceRecComponent } from './face-rec.component';

describe('FaceRecComponent', () => {
  let component: FaceRecComponent;
  let fixture: ComponentFixture<FaceRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
