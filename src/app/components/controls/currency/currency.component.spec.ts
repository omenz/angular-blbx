import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyComponent} from './currency.component';
import {Control, ControlType, CurrencySymbol} from '../../../core/domain/widget';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ CurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    component.control = new Control(ControlType.CURRENCY, 'label', 'value', false, CurrencySymbol.EUR, null)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
