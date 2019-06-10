import { Injectable } from '@angular/core';
import { CandidatoStore } from './candidatos.store';
import { Candidato } from '../../services/random-api.service';



@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private nameStore: CandidatoStore) {
  }

  setName(name: Candidato) {
    this.nameStore.setName(name);
  }

  resetName() {
    this.nameStore.resetName();
  }

}
