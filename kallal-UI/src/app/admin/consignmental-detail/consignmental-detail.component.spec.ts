import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentalDetailComponent } from './consignmental-detail.component';

describe('ConsignmentalDetailComponent', () => {
  let component: ConsignmentalDetailComponent;
  let fixture: ComponentFixture<ConsignmentalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
