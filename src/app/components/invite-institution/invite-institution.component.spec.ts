import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteInstitutionComponent } from './invite-institution.component';

describe('InviteInstitutionComponent', () => {
  let component: InviteInstitutionComponent;
  let fixture: ComponentFixture<InviteInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
