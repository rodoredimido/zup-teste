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
    { path: 'candidato', component: CandidatoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'todos'  },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
