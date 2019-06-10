import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TransferDataComponentService } from '../../services/transfer-data-component.service';
import { Candidato } from '../../services/random-api.service';
import { DatePipe } from '@angular/common';

import { Observable } from 'rxjs';
import { CandidatoQuery } from '../../states/model/candidatos.query';





@Component({ 
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.less']
})
export class CandidatoComponent implements OnInit {

  candidato: Candidato;
  
  photo: string = '';
  itenSeect: string = 'cu' ;
  info: InfoUser = {
    title:'',
    value: ''
  };
  candi$: Observable<Candidato>;
  first: boolean =  true;

  constructor(
      private _transferData:  TransferDataComponentService,
      private _activatedRoute: ActivatedRoute,
      private _datePipe: DatePipe,
      private _candidatoQuery: CandidatoQuery,
      private _router: Router ) {
        this._activatedRoute.params.subscribe( (params) =>  {
        //  this.candidato = this._transferData.findCandFromLogin(params['uuid']);
        //  this.photo =  this.candidato.picture.large;
        //  this.info.title = 'Hi, My name is';
        //  this.info.value = `${this.candidato.name.first} ${this.candidato.name.last}`;
         
        });
  }

  ngOnInit() {
    this.candi$ = this._candidatoQuery.getName$;
    this.candi$.subscribe( data =>{
      this.candidato = data;
      this.photo =  this.candidato.picture.large;
      this.info.title = 'Hi, My name is';
      this.info.value = `${this.candidato.name.first} ${this.candidato.name.last}`;
         
      console.log(data);
    })
  }

  select(event){
    console.log(this.candi$);
  this.first = false;
    switch (event) {
      case 'co':
            this.info.title = 'Hi, My name is';
            this.info.value = `${this.candidato.name.first} ${this.candidato.name.last}`;
        break;
        case 'en':
            this.info.title = 'Hi email address is';
            this.info.value = this.candidato.email;
        
        break;
        case 'ca':
            this.info.title = 'My birthday is';
            this.info.value =  this._datePipe.transform(this.candidato.dob.date, 'dd/MM/yyyy');
        
        break;
        case 'ma':
            this.info.title = 'My address is';
            this.info.value = this.candidato.location.street ;
        
        break;
        case 'ph':
            this.info.title = 'My phone number is';
            this.info.value = this.candidato.phone;
        
        break;
        case 'ke':
            this.info.title = 'My password is';
            this.info.value = this.candidato.login.password;
        
        break;
    
     
    }
    this.itenSeect = event;
    console.log(event);
  }
  goBack(){
    let url = this._transferData.getUrl();
    if(url == ''){
        url = 'todos';
    }
    this._router.navigate([url]);
  }

};



export interface InfoUser {
  title: string;
  value: string;
};
