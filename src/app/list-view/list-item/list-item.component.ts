import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input () data: any;
  @Input () type: any;

  countData: number;

  ngOnInit() {
    this.countData = this.data.length;
    this.data.forEach((item) => {
      item.name = item.entry.target[this.type].name;
      item.date = item.entry.target[this.type].createdAt;
    });
  }
}
