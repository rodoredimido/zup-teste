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
  candidatos: Candidato[] = [];

  // current list 
  currentList: Candidato[] = [];

  // Atendidos list
  atendidosList: Candidato[] = [];

  // Atendidos list
  currentLisAatendidos: Candidato[] = [];

  // lixeira list
  lixeiraList: Candidato[] = [];

  // lixeira list
  currentListlixeira: Candidato[] = [];

  url: string = '';

  //socket Internal
   onGetData: EventEmitter<Candidato[]>  = new EventEmitter();
   onGetDataLixira: EventEmitter<Candidato[]>  = new EventEmitter();
   onGetDataAttend: EventEmitter<Candidato[]>  = new EventEmitter(); 

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

  // buscar candidatos desde lixeira
  findCandLixeira( data: string ): Candidato[]{

    let lCand: Candidato[];
    if(data.length > 0){

        lCand = this.lixeiraList.filter(item => {
        console.log(item.name.first);
        return (item.name.first.toLowerCase().indexOf(data.toLowerCase()) > -1) ||
        (item.email.toLowerCase().indexOf(data.toLowerCase()) > -1);

      });
      console.log(lCand);
      this.onGetDataLixira.emit(lCand);
    } else {

       lCand = this.lixeiraList;
       console.log(lCand);
       this.onGetDataLixira.emit(lCand);
    }
    return lCand;
  }

   // buscar candidatos desde lixeira
   findCandAttend( data: string ): Candidato[]{

    let lCand: Candidato[];
    if(data.length > 0){

        lCand = this.atendidosList.filter(item => {
        console.log(item.name.first);
        return (item.name.first.toLowerCase().indexOf(data.toLowerCase()) > -1) ||
        (item.email.toLowerCase().indexOf(data.toLowerCase()) > -1);

      });
      console.log(lCand);
      this.onGetDataAttend.emit(lCand);
    } else {

       lCand = this.atendidosList;
       console.log(lCand);
       this.onGetDataAttend.emit(lCand);
    }
    return lCand;
  }
  // Find candidato fron characters
  findCandFromLogin( uuid: string ): Candidato {

    let cand: Candidato[];
  
    if(uuid.length > 0){
      console.log(uuid);
      cand = this.candidatos.filter(item =>  {
        return item.login.uuid === uuid;
      }) ;
    }

    return cand[0];
  }

  // adquirir listado de lixeira

  getLixeiraList(){
    return this.lixeiraList;
  }

  // Adquirir listado de Atendidos
  getAtendidosList(){
    return this.atendidosList;
  }

  // pasar de todos para Lixeira
  setTodosToLixeira(data: Candidato){
    this.lixeiraList.push(data);
    this.onGetDataLixira.emit( this.lixeiraList );
    this.candidatos = this.candidatos.filter((item, idx  )=> {
       
      return  item !==  data;
    });
    this.onGetData.emit( this.candidatos );
  }
  
  //pasar de lixeira para todos
  setLixeiraToTodos(data: Candidato){
    this.candidatos.push(data);
    this.onGetData.emit( this.candidatos );
    this.lixeiraList = this.lixeiraList.filter((item, idx  )=> {
       
      return  item !==  data;
    });
    this.onGetDataLixira.emit( this.lixeiraList );
  }

  setLixeiraToAtend(data: Candidato){
    this.atendidosList.push(data);
    this.onGetData.emit( this.atendidosList );
    this.lixeiraList = this.lixeiraList.filter((item, idx  )=> {
       
      return  item !==  data;
    });
    this.onGetDataLixira.emit( this.lixeiraList );
  }
  
  // pasar todos para atendimiento
  async setTodosToAtend(data: Candidato){
    console.log(data)
    this.atendidosList.push(data)
    this.candidatos =  this.candidatos.filter((item, idx  )=> {
      
      return  item !=  data;
    });
    this.onGetDataAttend.emit( this.atendidosList );
    this.onGetData.emit( this.candidatos );
    
  }
  
  //pasar atendimiento  para todos
  setAtendToTodos(data: Candidato){
    this.candidatos.push(data)
    this.onGetData.emit( this.candidatos );
    this.atendidosList = this.atendidosList.filter((item, idx  )=> {
      return  item !==  data;
    });
    this.onGetDataAttend.emit( this.atendidosList );

  }

  setAtendToLixo(data: Candidato){
    this.lixeiraList.push(data)
    this.onGetData.emit( this.lixeiraList );
    this.atendidosList = this.atendidosList.filter((item, idx  )=> {
      return  item !==  data;
    });
    this.onGetDataAttend.emit( this.atendidosList );

  }

  setUrl( url: string ){
    this.url =  url;
  }

  getUrl(){
    return this.url;
  }

 



}
