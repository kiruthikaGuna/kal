import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagMasterAddComponent } from './bag-master-add.component';

describe('BagMasterAddComponent', () => {
  let component: BagMasterAddComponent;
  let fixture: ComponentFixture<BagMasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagMasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
