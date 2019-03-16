import {Component, Input, OnInit} from '@angular/core';
import {Control, CurrencySymbol} from '../../../core/domain/widget';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  constructor() { }

  @Input() control: Control;
  currencySign: string;
  formattedValue: string;
  private static currencySign(control: Control): string {
    switch (control.symbol) {
      case CurrencySymbol.EUR: return '€';
      case CurrencySymbol.USD: return '$';
    }
    return control.symbol;
  }

  private static formatCurrency(value: string, precision: number): string {
    let result: string;
    const clearNonDigitsCharacters = value.replace(/[^0-9.]+/g, '');
    if (precision) {
      const withPrecision = parseFloat(clearNonDigitsCharacters).toFixed(precision);
      result = CurrencyComponent.formatNumberWithCommas(withPrecision);
    } else {
      result = CurrencyComponent.formatNumberWithCommas(clearNonDigitsCharacters);
    }
    return result;
  }
  private static formatNumberWithCommas(num: string) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  ngOnInit() {
    this.currencySign = CurrencyComponent.currencySign(this.control);
    this.onUpdate(this.control.value.toString());
  }
  private onUpdate(newValue: string, input?: HTMLInputElement) {
    this.formattedValue = newValue ? CurrencyComponent.formatCurrency(newValue, this.control.precision) : '';
    if (input) {
      input.value = this.formattedValue;
    }
  }
}
