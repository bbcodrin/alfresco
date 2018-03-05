import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input () data: any;
  @Input () type: any;

  ngOnInit() {
    this.data.forEach((item) => {
      item.name = item.entry.target[this.type].name;
      item.date = item.entry.target[this.type].createdAt;
      item.author = item.entry.target[this.type].createdByUser.displayName;
    });
  }
}
