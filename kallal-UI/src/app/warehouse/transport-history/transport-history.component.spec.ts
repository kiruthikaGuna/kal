import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportHistoryComponent } from './transport-history.component';

describe('TransportHistoryComponent', () => {
  let component: TransportHistoryComponent;
  let fixture: ComponentFixture<TransportHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
