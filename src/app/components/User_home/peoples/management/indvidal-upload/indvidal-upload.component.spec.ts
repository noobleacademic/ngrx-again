import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndvidalUploadComponent } from './indvidal-upload.component';

describe('IndvidalUploadComponent', () => {
  let component: IndvidalUploadComponent;
  let fixture: ComponentFixture<IndvidalUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndvidalUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndvidalUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
