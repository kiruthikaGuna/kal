import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsermanagementComponent } from './add-usermanagement.component';

describe('AddUsermanagementComponent', () => {
  let component: AddUsermanagementComponent;
  let fixture: ComponentFixture<AddUsermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
