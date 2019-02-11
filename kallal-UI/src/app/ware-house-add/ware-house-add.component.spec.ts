import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseAddComponent } from './ware-house-add.component';

describe('WareHouseAddComponent', () => {
  let component: WareHouseAddComponent;
  let fixture: ComponentFixture<WareHouseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
