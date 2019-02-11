import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchMasetrAddComponent } from './dispatch-masetr-add.component';

describe('DispatchMasetrAddComponent', () => {
  let component: DispatchMasetrAddComponent;
  let fixture: ComponentFixture<DispatchMasetrAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchMasetrAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchMasetrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
