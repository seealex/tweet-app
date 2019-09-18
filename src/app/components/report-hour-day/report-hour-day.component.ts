import { Component, OnInit, ViewChild } from '@angular/core';

import { TweetCountByHourOfDayModel } from 'src/app/models/tweet-count-hour-day';
import { TweetService } from 'src/app/services/tweet.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-report-hour-day',
  templateUrl: './report-hour-day.component.html',
  styleUrls: ['./report-hour-day.component.css']
})
export class ReportHourDayComponent implements OnInit {
  dataSource: MatTableDataSource<TweetCountByHourOfDayModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['date', 'amount'];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    
    this.tweetService.get<TweetCountByHourOfDayModel[]>('/byHour')
    .subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
