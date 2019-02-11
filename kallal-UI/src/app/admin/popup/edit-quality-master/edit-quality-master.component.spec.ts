import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualityMasterComponent } from './edit-quality-master.component';

describe('EditQualityMasterComponent', () => {
  let component: EditQualityMasterComponent;
  let fixture: ComponentFixture<EditQualityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQualityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQualityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
