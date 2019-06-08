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
  imageUser: string= '';

  @Input() url: string;

  constructor(
    private _randomAPIService: RandomAPIService,
    private _transferData: TransferDataComponentService,
    private router: Router
) { 
  
}
ngOnInit() {this._randomAPIService.getUsers().subscribe((data:  any) => {
    this.candidato = data.results[0];
    this.imageUser =  this.candidato.picture.thumbnail;
    console.log(this.candidato);
  },
  (error) =>{
    console.log('Errors: ', error)
  });  
  }
  getUser(cand: string){
    console.log(cand);
    this._transferData.findCand(cand);
  }

}
