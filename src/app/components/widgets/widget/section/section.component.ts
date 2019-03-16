import {Component, Input, OnInit} from '@angular/core';
import {Control, Section} from '../../../../core/domain/widget';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  constructor() { }
  @Input() section: Section;
  controlColumns: Array<Array<Control>> = [];

  private static splitControlsArrayIntoChunks(controls: Array<Control>, chunkSize: number): Array<Array<Control>> {
    const res: Array<Array<Control>> = [];
    for (let idx = 0, len = controls.length; idx < len; idx += chunkSize) {
      res.push(controls.slice(idx, idx + chunkSize));
    }
    return res;
  }

  ngOnInit() {
    this.splitControlsByColumns();
  }
  private splitControlsByColumns() {
    const columns = this.section.columns;
    const controls = this.section.items;
    const controlCount = controls.length;
    if (controls && columns) {
      const chunkSize = Math.ceil(controlCount / columns);
      this.controlColumns = SectionComponent.splitControlsArrayIntoChunks(controls, chunkSize);
    }
  }
}
