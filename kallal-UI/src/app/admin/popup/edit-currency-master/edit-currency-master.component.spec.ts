import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurrencyMasterComponent } from './edit-currency-master.component';

describe('EditCurrencyMasterComponent', () => {
  let component: EditCurrencyMasterComponent;
  let fixture: ComponentFixture<EditCurrencyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCurrencyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurrencyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
