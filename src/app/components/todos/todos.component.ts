import { Component, OnInit } from '@angular/core';
import { RandomAPIService, Candidato } from '../../services/random-api.service';
import { TransferDataComponentService } from '../../services/transfer-data-component.service';

import { Router } from '@angular/router';

import { CandidatoService } from '../../states/model/proxy.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {

  candidatos: Candidato[];

  config: any = {
    id: 'info',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

  itemSelect: Candidato;
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

   constructor( private _transferData:  TransferDataComponentService,
                private _candidatoService: CandidatoService) {
                  this._transferData.setUrlNav('todos');
                  this.getCandidatos();
                  if (this.candidatos) {
                    if (this.candidatos.length > 0) {
                      console.log(this.candidatos);
                      this.configPagining(this.candidatos);
                    }
    }
   }

  ngOnInit() {
   this._transferData.onGetData.subscribe(candidatos => {
      this.candidatos = candidatos;
      if (candidatos.length > 0 ) {
        this.configPagining(candidatos);
        
      }
    });
  }
  pageChanged(event) {
  
    this.config.currentPage = event;
  }

  configPagining(data: Candidato[]) {
   // console.log(data);
   
    this.config = {
      id: 'info',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: data.length
    };
  }

  saveStateCand(data: Candidato) {
    this.itemSelect = data;
    this._transferData.setUrl('todos');
    this._candidatoService.setName(data);
  }

  setToAttend(data: Candidato) {
    this._transferData.setTodosToAtend(data);
  }

  setToLixo(data: Candidato) {
    this._transferData.setTodosToLixeira(data);
  }

  async getCandidatos() {
     this.candidatos = await this._transferData.getCandidatos();
  }

}
