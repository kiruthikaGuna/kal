import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMasterAddComponent } from './product-master-add.component';

describe('ProductMasterAddComponent', () => {
  let component: ProductMasterAddComponent;
  let fixture: ComponentFixture<ProductMasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
