import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInitializerComponent } from './form-initializer.component';

describe('FormInitializerComponent', () => {
  let component: FormInitializerComponent;
  let fixture: ComponentFixture<FormInitializerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInitializerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInitializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
