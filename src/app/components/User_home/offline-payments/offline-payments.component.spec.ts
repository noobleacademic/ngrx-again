import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePaymentsComponent } from './offline-payments.component';

describe('OfflinePaymentsComponent', () => {
  let component: OfflinePaymentsComponent;
  let fixture: ComponentFixture<OfflinePaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinePaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
