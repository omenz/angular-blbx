import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetsService } from '../core/services/widgets.service';

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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataUrl = params['dataurl'];
    });
    console.log(this.dataUrl);
    this.widgetService.getWidgets(this.dataUrl);
  }
}
