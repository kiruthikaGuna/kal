import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorebagComponent } from './storebag.component';

describe('StorebagComponent', () => {
  let component: StorebagComponent;
  let fixture: ComponentFixture<StorebagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorebagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorebagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
