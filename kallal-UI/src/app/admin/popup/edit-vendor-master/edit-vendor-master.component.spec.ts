import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorMasterComponent } from './edit-vendor-master.component';

describe('EditVendorMasterComponent', () => {
  let component: EditVendorMasterComponent;
  let fixture: ComponentFixture<EditVendorMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVendorMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendorMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
