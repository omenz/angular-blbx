import {Component, Input, OnInit} from '@angular/core';
import {Control, Section} from '../../../../core/domain/widget';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  controlColumns: Array[Control[]];
  constructor() { }

  ngOnInit() {
    console.log('Section initialized: ');
    console.log(this.section);
    this.splitByColumns();
  }
  private splitByColumns() {
    const columns = this.section.columns;
    const controls = this.section.items;
    const controlCount = controls.length;
    if (controls && columns) {
      const chunkSize = Math.ceil(controlCount / columns);
      this.controlColumns = this.splitControlsArrayIntoChunks(controls, chunkSize);
    }
  }

  private splitControlsArrayIntoChunks(controls: Array[Control], chunkSize: number): Array[Control[]] {
    const res: Array[Section[]] = [];
    for (let idx = 0, len = controls.length; idx < len; idx += chunkSize) {
      res.push(controls.slice(idx, idx + chunkSize));
    }
    return res;
  }
}
