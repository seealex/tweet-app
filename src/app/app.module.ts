import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCardModule} from '@angular/material'
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';

import { routing }        from './app.routing';
import { ReportUserComponent } from './components/report-user/report-user.component';
import { ReportTopFiveComponent } from './components/report-top-five/report-top-five.component';
import { ReportHourDayComponent } from './components/report-hour-day/report-hour-day.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    ReportUserComponent,
    ReportTopFiveComponent,
    ReportHourDayComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
