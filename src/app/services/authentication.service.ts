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

    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<UserModel>;
    private config;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.config = environment;
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login() {
      const username = 'iv90AuvsDn3jNVWRcIpu6NAPiOuDRrXH';
      const password = 'UYCb0K5XIbCQnKZH';
      
      //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

      const headers = {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Content-type': 'application/x-www-form-urlencoded'
      }

    const body = new HttpParams().set('grant_type', 'client_credentials');


      return this.http.post<any>('http://alexsantosilva-eval-test.apigee.net/oauth/accesstoken', body, {headers})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', user.access_token);
            this.currentUserSubject.next(user);
        }

        return user;
      }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }
}
