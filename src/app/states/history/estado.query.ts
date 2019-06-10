import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { InitialStateStore, InitialState } from './estado.store';
 
@Injectable({
  providedIn: 'root'
})
export class NameQuery extends Query<InitialState> {
 
  getName$ = this.select(state => state);
 
  constructor(protected store: InitialStateStore) {
    super(store);
  }
 
}