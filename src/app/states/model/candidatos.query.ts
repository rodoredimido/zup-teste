import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {  CandidatoStore } from './candidatos.store';
import { Candidato } from '../../services/random-api.service';

 
@Injectable({
  providedIn: 'root'
})
export class CandidatoQuery extends Query<Candidato> {
 
  getName$ = this.select(state => state);
 
  constructor(protected store: CandidatoStore) {
    super(store);
  }
 
}