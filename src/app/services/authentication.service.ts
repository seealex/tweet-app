import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private currentTokenSubject: BehaviorSubject<any>;
    public currentToken: Observable<any>;
    private config;

    constructor(private http: HttpClient) {
        this.currentTokenSubject = new BehaviorSubject<any>(localStorage.getItem('token'));
        this.currentToken = this.currentTokenSubject.asObservable();
        this.config = environment;
    }

    public get currentTokenValue(): any {
        return this.currentTokenSubject.value;
    }

    login() {
      const username = 'iv90AuvsDn3jNVWRcIpu6NAPiOuDRrXH';
      const password = 'UYCb0K5XIbCQnKZH';
      
      const headers = {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Content-type': 'application/x-www-form-urlencoded'
      }

    const body = new HttpParams().set('grant_type', 'client_credentials');


      return this.http.post<any>('http://alexsantosilva-eval-test.apigee.net/token', body, {headers})
      .pipe(map(user => {
        if (user && user.access_token) {
            localStorage.setItem('token', user.access_token);
            this.currentTokenSubject.next(user.access_token);
        }

        return user;
      }));
    }

    logout() {
      return new Observable(observer => {
        localStorage.removeItem('token');
        this.currentTokenSubject.next(null);
        setTimeout(() => {
            observer.next(null);
        }, 1000);
      });
        
    }
}
