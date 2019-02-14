import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentSearchComponent } from './consignment-search.component';

describe('ConsignmentSearchComponent', () => {
  let component: ConsignmentSearchComponent;
  let fixture: ComponentFixture<ConsignmentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
