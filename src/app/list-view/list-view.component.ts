import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../shared/utils/utils';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input () data: any;
  filesList = [];
  foldersList = [];
  sitesList = [];

  constructor (private _utils: Utils) {}

  ngOnInit() {
    this.filesList = this._utils.processData(this.data).files;
    this.foldersList = this._utils.processData(this.data).folders;
    this.sitesList = this._utils.processData(this.data).sites;
  }
}
