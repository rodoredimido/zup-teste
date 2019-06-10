import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Candidato } from '../../services/random-api.service';

 
export interface InitialState {
  name: string | null;
}
 
export function createInitialState(): InitialState {
  return {name: ''};
}
 
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'estado' })
export class InitialStateStore extends Store<InitialState> {

  constructor() {
    super(createInitialState());
  }
 
  setName(name: string) {
    this.update({name});
  }
 
  resetName() {
    this.update(createInitialState());
  }
 
}