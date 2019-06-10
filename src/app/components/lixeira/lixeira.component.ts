import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NameQuery } from '../../states/namestate.query';
import { RandomAPIService, Candidato } from '../../services/random-api.service';

import { TransferDataComponentService } from '../../services/transfer-data-component.service';

import { Router } from '@angular/router';

import { CandidatoService } from '../../states/model/proxy.service';
import { EstadoService } from '../../states/history/proxy.service';
// import { InitialState } from '../../states/history/estado.store';



@Component({
  selector: 'app-lixeira',
  templateUrl: './lixeira.component.html',
  styleUrls: ['./lixeira.component.less']
})
export class LixeiraComponent implements OnInit {

  lixeiraList: Candidato[];
  name$: Observable<string>;

  config: any = {
    id: 'info',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

  public maxSize = 7;
  public directionLinks = true;
  public autoHide = false;
  public responsive = true;
  public labels: any = {
      previousLabel: '<',
      nextLabel: '>',
      screenReaderPaginationLabel: 'Paginação',
      screenReaderPageLabel: 'Pagina',
      screenReaderCurrentLabel: `PAgina atual`
  };
  constructor( private nameQuery: NameQuery,
               private _transferData:  TransferDataComponentService,
               private _estadoService: EstadoService,
               private _candidatoService: CandidatoService ) {

                this.getCandidatos();
                if (this.lixeiraList) {
                  if (this.lixeiraList.length > 0) {
                    console.log(this.lixeiraList);
                    this.configPagining(this.lixeiraList);
                  }
                }
                }

  ngOnInit() {
    console.log('lixeira');
    this._transferData.onGetDataLixira.subscribe(candidatos => {
      this.lixeiraList = candidatos;
      if (candidatos.length > 0 ) {
        this.configPagining(candidatos);
        console.log(this.lixeiraList);
      }
    });
  }
  pageChanged(event) {
    console.log(event);
    this.config.currentPage = event;
  }

  configPagining(data: Candidato[]) {
    // console.log(data);
    console.log(data.length);
     this.config = {
       id: 'trash',
       itemsPerPage: 5,
       currentPage: 1,
       totalItems: data.length
     };
   }
   saveStateCand(data: Candidato) {
     this._transferData.setUrl('lixeira');
    this._candidatoService.setName(data);
  }


  setToAttend(data: Candidato) {
    this._transferData.setLixeiraToAtend(data);
  }

  setToTodos(data: Candidato) {
    this._transferData.setLixeiraToTodos(data);
  }
  async getCandidatos() {
    this.lixeiraList = await this._transferData.getLixeiraList();
 }
}
