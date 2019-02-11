import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureMasterComponent } from './structure-master.component';

describe('StructureMasterComponent', () => {
  let component: StructureMasterComponent;
  let fixture: ComponentFixture<StructureMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
