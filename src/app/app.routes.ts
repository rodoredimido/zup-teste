// componentes para Single Page Application

import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import { AtendidosComponent } from './components/atendidos/atendidos.component';
import { LixeiraComponent } from './components/lixeira/lixeira.component';
import { CandidatoComponent } from './components/candidato/candidato.component';


const APP_ROUTES: Routes = [
    { path: 'todos', component: TodosComponent },
    { path: 'atendidos', component: AtendidosComponent },
    { path: 'lixeira', component: LixeiraComponent },
    // { path: 'lixeira', loadChildren: './components/lixeira/lixeira.module#LixeiraModule' },
    // { path: 'candidato', component: CandidatoComponent },
     { path: 'candidato', loadChildren: './components/candidato/candidato.module#CandidatoModule' },
    { path: '**', pathMatch: 'full', redirectTo: 'todos'  },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
