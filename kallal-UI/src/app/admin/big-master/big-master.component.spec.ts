import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigMasterComponent } from './big-master.component';

describe('BigMasterComponent', () => {
  let component: BigMasterComponent;
  let fixture: ComponentFixture<BigMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
