import { Injectable } from '@angular/core';
import { InitialStateStore, InitialState } from './estado.store';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private initialStateStore: InitialStateStore) {
  }

  setName(name: string) {
    this.initialStateStore.setName(name);
  }

  resetName() {
    this.initialStateStore.resetName();
  }

}
