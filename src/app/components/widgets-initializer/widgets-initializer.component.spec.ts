import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetsInitializerComponent} from './widgets-initializer.component';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {WidgetsComponent} from '../widgets/widgets.component';
import {WidgetComponent} from '../widgets/widget/widget.component';
import {SectionComponent} from '../widgets/widget/section/section.component';
import {APP_BASE_HREF} from '@angular/common';

describe('WidgetsInitializerComponent', () => {
  let component: WidgetsInitializerComponent;
  let fixture: ComponentFixture<WidgetsInitializerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
      ],
      declarations: [
        WidgetsInitializerComponent,
        WidgetsComponent,
        WidgetComponent,
        SectionComponent,
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsInitializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
