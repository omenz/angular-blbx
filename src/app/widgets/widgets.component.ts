import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetsService} from '../core/services/widgets.service';
import {Widgets} from '../core/domain/widget';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetsService,
  ) {}
  private widgets: Observable<Widgets>;

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.widgets = this.widgetService.getWidgets(params['dataurl']));
  }
  stringify(obj: any): string {
    return JSON.stringify(obj);
  }
}
