import { Component, OnInit, Input } from '@angular/core';
import { RandomAPIService, Candidato } from '../../../services/random-api.service';
import { TransferDataComponentService } from '../../../services/transfer-data-component.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.less']
})
export class NabvarComponent implements OnInit {

  candidato: Candidato;
  imageUser = '';

  @Input() url = '';

  constructor(
    private _randomAPIService: RandomAPIService,
    private _transferData: TransferDataComponentService,
    private router: Router
) {

}
ngOnInit() {
  this._randomAPIService.getUsers().subscribe((data:  any) => {
    this.candidato = data.results[0];
    this.imageUser =  this.candidato.picture.thumbnail;
  
  },
  (error) => {
    console.log('Errors: ', error);
  });

  this._transferData.onGetDataUrl.subscribe(url => {
    this.url = url;
    
  });
  }
  getUser(cand: string) {
    console.log(cand);
    console.log(this.router.url);
    switch (this.router.url) {
      case '/todos':
        this._transferData.findCand(cand);
        break;

      case '/atendidos':
          this._transferData.findCandAttend(cand);
          break;

      case '/lixeira':
          this._transferData.findCandLixeira(cand);
          break;


    }
  }

}
