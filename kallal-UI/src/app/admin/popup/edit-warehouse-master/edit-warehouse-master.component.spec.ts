import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWarehouseMasterComponent } from './edit-warehouse-master.component';

describe('EditWarehouseMasterComponent', () => {
  let component: EditWarehouseMasterComponent;
  let fixture: ComponentFixture<EditWarehouseMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarehouseMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWarehouseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
