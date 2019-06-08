import { Component, OnInit } from '@angular/core';
import { RandomAPIService, Candidato } from '../../services/random-api.service';
import { TransferDataComponentService } from '../../services/transfer-data-component.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {
  
  //candidatos List 
  candidatos: Candidato[];

  config: any;
  
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

   constructor( private _transferData:  TransferDataComponentService){
    this.getCandidatos();
    if(this.candidatos){
      if(this.candidatos.length > 0){
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
  
  pageChanged(event){
    console.log(event);
    this.config.currentPage = event;
  }

  configPagining(data: Candidato[]){
   // console.log(data);
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: data.length
    };
  }

  

  async getCandidatos() {
     this.candidatos = await this._transferData.getCandidatos();
  }

}
