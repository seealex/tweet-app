import { Component, OnInit } from '@angular/core';

import { TweetCountByHourOfDayVO } from 'src/app/models/tweet-count-hour-day';


const ELEMENT_DATA: TweetCountByHourOfDayVO[] = [
  {date: 'Hydrogen', amount: 5},
  {date: 'Helium', amount: 15 }
];

@Component({
  selector: 'app-report-top-five',
  templateUrl: './report-top-five.component.html',
  styleUrls: ['./report-top-five.component.css']
})
export class ReportTopFiveComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
