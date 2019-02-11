import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchMasterComponent } from './dispatch-master.component';

describe('DispatchMasterComponent', () => {
  let component: DispatchMasterComponent;
  let fixture: ComponentFixture<DispatchMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
