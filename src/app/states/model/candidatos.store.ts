import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Candidato } from '../../services/random-api.service';

 

 
export function createInitialCandidatoState(): Candidato {
  return {
      cell: '',
      email: '',
      phone: ''
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'candidato',
 })
export class CandidatoStore extends Store<Candidato> {
 
  constructor() {
    super(createInitialCandidatoState());
  }
 
  setName(candidato: Candidato) {
    this.update(candidato);
  }
 
  resetName() {
    this.update(createInitialCandidatoState());
  }
 
}