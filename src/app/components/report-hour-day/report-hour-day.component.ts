import { Component, OnInit } from '@angular/core';

import { TweetCountByHourOfDayVO } from 'src/app/models/tweet-count-hour-day';


const ELEMENT_DATA: TweetCountByHourOfDayVO[] = [
  {date: 'Hydrogen', amount: 5},
  {date: 'Helium', amount: 15 }
];

@Component({
  selector: 'app-report-hour-day',
  templateUrl: './report-hour-day.component.html',
  styleUrls: ['./report-hour-day.component.css']
})
export class ReportHourDayComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
