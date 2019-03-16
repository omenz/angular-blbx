import {Component, Input, OnInit} from '@angular/core';
import {Control} from '../../../core/domain/widget';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  constructor() { }
  @Input() control: Control;

  ngOnInit() {
  }

}
