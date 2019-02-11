import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureMasterAddComponent } from './structure-master-add.component';

describe('StructureMasterAddComponent', () => {
  let component: StructureMasterAddComponent;
  let fixture: ComponentFixture<StructureMasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureMasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
