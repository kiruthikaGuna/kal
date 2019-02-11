import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsermanagementComponent } from './edit-usermanagement.component';

describe('EditUsermanagementComponent', () => {
  let component: EditUsermanagementComponent;
  let fixture: ComponentFixture<EditUsermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
