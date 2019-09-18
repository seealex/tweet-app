import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule }    from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs'


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
import { MainTabComponent } from './components/main-tab/main-tab.component';
import { TokenInterceptor } from './utils/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    ReportUserComponent,
    ReportTopFiveComponent,
    ReportHourDayComponent,
    MainTabComponent
  ],
  imports: [
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
