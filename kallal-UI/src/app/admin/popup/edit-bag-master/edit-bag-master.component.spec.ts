import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBagMasterComponent } from './edit-bag-master.component';

describe('EditBagMasterComponent', () => {
  let component: EditBagMasterComponent;
  let fixture: ComponentFixture<EditBagMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBagMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBagMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
