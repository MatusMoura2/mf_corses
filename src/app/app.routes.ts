import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Home } from './components/home/home';

import { Linguagens } from './components/linguagens/linguagens';

import { LJava } from './components/l-java/l-java';
import { LPython } from './components/l-python/l-python';
import { ConcursoPublico } from './components/concurso-publico/concurso-publico';
import { Matematica } from './components/matematica/matematica';
import { Portugues } from './components/portugues/portugues';
import { Redacao } from './components/redacao/redacao';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'linguagens', component: Linguagens },
  { path: 'l-java', component: LJava },
  { path: 'l-python', component: LPython },
  { path: 'concursos', component: ConcursoPublico },
  { path: 'matematica', component: Matematica },
  { path: 'portugues', component: Portugues },
  { path: 'redacao', component: Redacao },
  { path: '', component: Home, pathMatch: 'full' }
];
