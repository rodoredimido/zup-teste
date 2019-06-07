import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/**
 * rutas
 */
import { APP_ROUTING } from './app.routes';

/**
 * Componentes
 */


import { AppComponent } from './app.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TodosComponent } from './components/todos/todos.component';
import { AtendidosComponent } from './components/atendidos/atendidos.component';
import { LixeiraComponent } from './components/lixeira/lixeira.component';
import { LeftMenuComponent } from './components/shared/left-menu/left-menu.component';
import { CandidatoComponent } from './components/candidato/candidato.component';

// modules library


//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StateBrasilPipe } from './pipes/state-brasil.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HeaderComponent,
    FooterComponent,
    TodosComponent,
    AtendidosComponent,
    LixeiraComponent,
    LeftMenuComponent,
    CandidatoComponent,
    StateBrasilPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
