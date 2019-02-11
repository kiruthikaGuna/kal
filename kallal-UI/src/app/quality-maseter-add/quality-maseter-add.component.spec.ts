import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityMaseterAddComponent } from './quality-maseter-add.component';

describe('QualityMaseterAddComponent', () => {
  let component: QualityMaseterAddComponent;
  let fixture: ComponentFixture<QualityMaseterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityMaseterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityMaseterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
