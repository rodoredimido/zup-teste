import { Component, OnInit } from '@angular/core';
import { RandomAPIService, Candidato } from '../../../services/random-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.less']
})
export class NabvarComponent implements OnInit {

  candidato: Candidato;
  imageUser: string= '';


  constructor(
    private _randomAPIService: RandomAPIService,
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

}
