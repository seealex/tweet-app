import { Component, OnInit, ViewChild } from '@angular/core';

import { UserTopFiveWithMoreFollowersModel } from 'src/app/models/user-top-five-followers';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-report-top-five',
  templateUrl: './report-top-five.component.html',
  styleUrls: ['./report-top-five.component.css']
})
export class ReportTopFiveComponent implements OnInit {
  dataSource: MatTableDataSource<UserTopFiveWithMoreFollowersModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  displayedColumns: string[] = ['id', 'screenName', 'followers'];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    
    this.tweetService.get<UserTopFiveWithMoreFollowersModel[]>('/topFive')
    .subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
