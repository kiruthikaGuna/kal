import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDispatchMasterComponent } from './edit-dispatch-master.component';

describe('EditDispatchMasterComponent', () => {
  let component: EditDispatchMasterComponent;
  let fixture: ComponentFixture<EditDispatchMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDispatchMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDispatchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
