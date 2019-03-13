import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../core/domain/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() widget: Widget;

  ngOnInit() {
    console.log('Widget initialized: ');
    console.log(this.widget);
  }
}
