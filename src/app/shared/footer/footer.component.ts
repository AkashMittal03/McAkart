import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentDate = Date.now();
  nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  constructor() { }

  ngOnInit(): void {
  }

}
