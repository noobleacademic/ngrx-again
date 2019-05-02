import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNoobleComponent } from './about-nooble.component';

describe('AboutNoobleComponent', () => {
  let component: AboutNoobleComponent;
  let fixture: ComponentFixture<AboutNoobleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNoobleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNoobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
