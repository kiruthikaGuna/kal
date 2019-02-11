import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMasterAddComponent } from './currency-master-add.component';

describe('CurrencyMasterAddComponent', () => {
  let component: CurrencyMasterAddComponent;
  let fixture: ComponentFixture<CurrencyMasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyMasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
