import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Input () title: string;
  @Input () user: string;

  ngOnInit() {
    if (!this.title) {
      this.title = 'Favourite items';
    }
  }
}
