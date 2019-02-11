import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentWeightComponent } from './consignment-weight.component';

describe('ConsignmentWeightComponent', () => {
  let component: ConsignmentWeightComponent;
  let fixture: ComponentFixture<ConsignmentWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
