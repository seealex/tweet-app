import { Component, OnInit, ViewChild } from '@angular/core';
import { TweetByTagByUserIdiomModel } from 'src/app/models/tweet-tag-user-idiom';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.css']
})
export class ReportUserComponent implements OnInit {
  dataSource: MatTableDataSource<TweetByTagByUserIdiomModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['tweets', 'hastTag', 'idiom'];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    
    this.tweetService.get<TweetByTagByUserIdiomModel[]>('/byUserIdiomCountry')
    .subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
