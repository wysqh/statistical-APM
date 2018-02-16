import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginNebularTestComponent } from './user-login-nebular-test.component';

describe('UserLoginNebularTestComponent', () => {
  let component: UserLoginNebularTestComponent;
  let fixture: ComponentFixture<UserLoginNebularTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginNebularTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginNebularTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
