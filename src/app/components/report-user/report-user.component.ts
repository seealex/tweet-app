import { Component, OnInit } from '@angular/core';
import { TweetCountByHourOfDayVO } from 'src/app/models/tweet-count-hour-day';


const ELEMENT_DATA: TweetCountByHourOfDayVO[] = [
  {date: 'Hydrogen', amount: 5},
  {date: 'Helium', amount: 15 }
];

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.css']
})
export class ReportUserComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
