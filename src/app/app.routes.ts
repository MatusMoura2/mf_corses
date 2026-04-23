import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: '', component: Home, pathMatch: 'full' }
];
