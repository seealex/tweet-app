import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainTabComponent } from './components/main-tab/main-tab.component';

import { AuthGuard } from './utils/auth.guard';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: MainTabComponent, canActivate: [AuthGuard]  },
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);