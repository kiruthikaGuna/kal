import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStructureMasterComponent } from './edit-structure-master.component';

describe('EditStructureMasterComponent', () => {
  let component: EditStructureMasterComponent;
  let fixture: ComponentFixture<EditStructureMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStructureMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStructureMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
