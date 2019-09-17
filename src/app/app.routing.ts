import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ReportHourDayComponent } from './components/report-hour-day/report-hour-day.component';
import { ReportUserComponent } from './components/report-user/report-user.component';
import { ReportTopFiveComponent } from './components/report-top-five/report-top-five.component';

//import { AuthGuard } from './_guards';

const appRoutes: Routes = [
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent },
    { path: '1', component: ReportHourDayComponent },
    { path: '2', component: ReportUserComponent },
    { path: '3', component: ReportTopFiveComponent },

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);