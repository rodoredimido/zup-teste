/**
 * Serviço para trasferir informacion entre Component
 */
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Candidato } from './random-api.service';


@Injectable({
  providedIn: 'root'
})
export class TransferDataComponentService {

  // Cadidatos list
  candidatos: Candidato[];

  // current list 
  currentList: Candidato[];

  // Atendidos list
  atendidosList: Candidato[];

  // lixeira list
  lixeiraList: Candidato[];

  //socket Internal
   onGetData: EventEmitter<Candidato[]>  = new EventEmitter(); 

   constructor() { }
  // Load Candidatos from  app.component end generate callback
  setCandidatos( data: Candidato[]){
    this.candidatos = data;
    this.onGetData.emit(data);
  }

  // get all candidatos loading after
  getCandidatos(): Candidato[]{
    return this.candidatos;
  }

  // Set Current List to variable
  setCurrentList(data: Candidato[]){
    this.currentList = data;
  }

  // Find candidato fron characters
  findCand( data: string ): Candidato[]{

    let lCand: Candidato[];
    if(data.length > 0){

        lCand = this.candidatos.filter(item => {
        console.log(item.name.first);
        return (item.name.first.toLowerCase().indexOf(data.toLowerCase()) > -1) ||
        (item.email.toLowerCase().indexOf(data.toLowerCase()) > -1);

      });
      console.log(lCand);
      this.onGetData.emit(lCand);
    } else {

       lCand = this.candidatos;
       console.log(lCand);
       this.onGetData.emit(lCand);
    }
    return lCand;
  }

}
