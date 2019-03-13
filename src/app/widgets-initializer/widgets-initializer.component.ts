import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-initializer',
  templateUrl: './widgets-initializer.component.html',
  styleUrls: ['./widgets-initializer.component.scss']
})
export class WidgetsInitializerComponent implements OnInit {
  form = new FormGroup({
    dataUrl: new FormControl()
  });
  constructor() { }

  ngOnInit() {
    this.form.get('dataUrl').setValue( window.location.origin + '/data/data.json');
  }
  dataUrl() {
    return this.form.get('dataUrl').value;
  }
}
