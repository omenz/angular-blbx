import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor( private route: ActivatedRoute) {}
  private dataUrl: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataUrl = params['dataurl'];
    });
    console.log(this.dataUrl);
  }
}
