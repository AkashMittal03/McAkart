import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  @Input() pageNameList: [];
  @Output() selectedPage = new EventEmitter();

  pageMapper = {
    Home: 'home',
    'My Orders': 'orders',
    Products: 'products',
    About: 'about'
  };

  constructor(
  ) { }

  ngOnInit(): void {
  }

  // Function emits to selected page route
  goToPage(page: string): void {
    if (page.toLowerCase().indexOf(this.pageMapper[page].toLowerCase()) > -1) {
      this.selectedPage.emit(this.pageMapper[page].toLowerCase());
    }
  }
}
