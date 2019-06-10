import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


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
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// modules library

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StateBrasilPipe } from './pipes/state-brasil.pipe';

import {NgxPaginationModule} from 'ngx-pagination';
import { DatePipe } from '@angular/common';

import { CandidatoModule } from '../app/components/candidato/candidato.module';


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
    // CandidatoComponent,
    StateBrasilPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    // CandidatoModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    APP_ROUTING
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
