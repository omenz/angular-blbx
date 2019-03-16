import {Component, Input, OnInit} from '@angular/core';
import {Control} from '../../../core/domain/widget';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  @Input() control: Control;
  constructor() { }

  ngOnInit() {
  }

}
