import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tweet-app';
}

