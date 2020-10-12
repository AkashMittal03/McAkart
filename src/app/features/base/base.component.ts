import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  pageNameList = ['Home', 'Products', 'My Orders', 'About'];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Function navigate to clicked page
  goToPage(event) {
    this.router.navigate([event]);
  }

}
