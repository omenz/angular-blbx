import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetsService} from '../core/services/widgets.service';
import {Widgets} from '../core/domain/widget';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetsService,
  ) {}
  private dataUrl: string;
  private widgets: Observable<Widgets>;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataUrl = params['dataurl'];
    });
    console.log(this.dataUrl);
    this.widgets = this.widgetService.getWidgets(this.dataUrl);
  }
  stringify(obj: any): string {
    return JSON.stringify(obj);
  }
}
