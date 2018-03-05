import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../shared/utils/utils';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  @Input () data: any;
  filesList = [];
  foldersList = [];
  sitesList = [];

  constructor (private _utils: Utils) {}

  ngOnInit() {
    if (this.data) {
      this.filesList = this._utils.processData(this.data).files;
      this.foldersList = this._utils.processData(this.data).folders;
      this.sitesList = this._utils.processData(this.data).sites;
    }
  }
}
