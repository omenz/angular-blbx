import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetComponent} from './widget.component';
import {Widget, WidgetType} from '../../../core/domain/widget';
import {SectionComponent} from './section/section.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {WidgetsComponent} from '../widgets.component';
import {WidgetsInitializerComponent} from '../../widgets-initializer/widgets-initializer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CurrencyComponent} from '../../controls/currency/currency.component';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        WidgetsInitializerComponent,
        WidgetsComponent,
        WidgetComponent,
        SectionComponent,
        CurrencyComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    component.widget = new Widget(1, 'pew pew', WidgetType.FORM, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
