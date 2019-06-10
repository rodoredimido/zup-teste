import { Component, OnInit, OnDestroy } from '@angular/core';
import { NameService } from '../../states/proxy.service';

import { RandomAPIService, Candidato } from '../../services/random-api.service';
import { TransferDataComponentService } from '../../services/transfer-data-component.service';
import { CandidatoService } from '../../states/model/proxy.service';

import { Router } from '@angular/router';





@Component({
  selector: 'app-atendidos',
  templateUrl: './atendidos.component.html',
  styleUrls: ['./atendidos.component.less']
})
export class AtendidosComponent implements  OnInit {

  atendidosList: Candidato[];
  config: any={
    id: 'info',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  }
  
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<',
      nextLabel: '>',
      screenReaderPaginationLabel: 'Paginação',
      screenReaderPageLabel: 'Pagina',
      screenReaderCurrentLabel: `PAgina atual`
  };

  constructor(  private nameService: NameService,
    private _transferData:  TransferDataComponentService,
    private _candidatoService: CandidatoService ) {
      this.atendidosList =  this._transferData.getAtendidosList();
      if(this.atendidosList){
        if(this.atendidosList.length > 0){
          console.log(this.atendidosList);
          this.configPagining(this.atendidosList);
        }
      }
     }

  ngOnInit() {
    console.log("atendidos");
    this._transferData.onGetDataAttend.subscribe(candidatos => {
      this.atendidosList = candidatos;
      if (candidatos.length > 0 ) {
        this.configPagining(candidatos);
        console.log(this.atendidosList);
      }
    });
  }
  pageChanged(event){
    console.log(event);
    this.config.currentPage = event;
  }
  
  setName(user: string) {
    this.nameService.setName(user);
  }
 
  resetName() {
    this.nameService.resetName();
  }
 
  configPagining(data: Candidato[]){
    // console.log(data);
    console.log(data.length);
     this.config = {
       id: 'attend',
       itemsPerPage: 5,
       currentPage: 1,
       totalItems: data.length
     };
   }

   saveStateCand(data: Candidato){
    this._transferData.setUrl('atendidos');
    this._candidatoService.setName(data);
  }

  setToLixeira(data: Candidato){
    this._transferData.setAtendToLixo(data);
  }

  setToTodos(data: Candidato){
    this._transferData.setAtendToTodos(data);
  }

   async getCandidatos() {
    this.atendidosList = await this._transferData.getAtendidosList() ;
 }



}
