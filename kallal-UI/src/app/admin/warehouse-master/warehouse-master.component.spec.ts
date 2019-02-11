import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseMasterComponent } from './warehouse-master.component';

describe('WarehouseMasterComponent', () => {
  let component: WarehouseMasterComponent;
  let fixture: ComponentFixture<WarehouseMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
