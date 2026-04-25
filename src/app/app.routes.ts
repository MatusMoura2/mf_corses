import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Home } from './components/home/home';

import { Linguagens } from './components/linguagens/linguagens';

import { LJava } from './components/l-java/l-java';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'linguagens', component: Linguagens },
  { path: 'l-java', component: LJava },
  { path: '', component: Home, pathMatch: 'full' }
];
