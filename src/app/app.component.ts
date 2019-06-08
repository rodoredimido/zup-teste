import { Component } from '@angular/core';
import { RandomAPIService, Candidato } from './services/random-api.service';
import { TransferDataComponentService } from './services/transfer-data-component.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  title = 'gerenciarCandidatos';
  candidatos: Candidato[];

  constructor( private _randomAPIService: RandomAPIService,
               private _transferData: TransferDataComponentService,
               private router: Router) {

    this._randomAPIService.getAllUsers().subscribe((data:  any) => {
    this.candidatos = data.results;
    this._transferData.setCandidatos(this.candidatos);
   // console.log(this.candidatos);
  },
  (error) =>{
    console.log('Errors: ', error)
  });

}

getRoute(): string {
   return this.router.url;
}
}
