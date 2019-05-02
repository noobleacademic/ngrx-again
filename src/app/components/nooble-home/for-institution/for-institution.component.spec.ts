import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInstitutionComponent } from './for-institution.component';

describe('ForInstitutionComponent', () => {
  let component: ForInstitutionComponent;
  let fixture: ComponentFixture<ForInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
