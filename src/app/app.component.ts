import { Component, OnInit } from '@angular/core';
import { Service } from './service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: string;
  title: string;
  selectMode: boolean;
  items: any;
  json: any;

  gridView = true;
  listView = false;

  constructor(private _service: Service) {}

  ngOnInit() {
    this.title = 'Favourite items';
    this.user = 'admin';
    this.selectMode = true;

    // get real backend data - no token available
    // this.getData();

    this._service.getJSON().subscribe(data => {
      this.json = data;
    });
  }

  getData() {
   this._service.getFavoriteItems().subscribe(
      data => { this.items = data; },
      err => console.error(err),
      () => console.log('done loading data')
    );
  }

  switchView(flag) {
    this.selectMode = false;
    this.gridView = !flag;
    this.listView = flag;
  }
}
