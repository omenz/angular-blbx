import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormInitializerComponent} from './form-initializer.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormComponent} from '../form/form.component';

describe('FormInitializerComponent', () => {
  let component: FormInitializerComponent;
  let fixture: ComponentFixture<FormInitializerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
      ],
      declarations: [FormInitializerComponent, FormComponent]
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
