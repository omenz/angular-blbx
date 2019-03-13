import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {WidgetsComponent} from './widgets.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {WidgetsInitializerComponent} from '../widgets-initializer/widgets-initializer.component';
import {HttpClientModule} from '@angular/common/http';
import {WidgetComponent} from './widget/widget.component';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
      ],
      declarations: [ WidgetsComponent, WidgetsInitializerComponent, WidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
