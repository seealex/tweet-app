import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {environment} from '../../environments/environment';
import { map, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private config;
  constructor(private http: HttpClient) { 
    this.config = environment;
  }

  get<T>(url: string) {
    return this.http.get<T>(`${this.config.api}${url}`)
      .pipe(
        retry(2)
      );
  }
}
