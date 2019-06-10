import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
 
export interface NameState {
  name: string | null;
}
 
export function createInitialNameState(): NameState {
  return {name: ''};
}
 
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'name' })
export class NameStore extends Store<NameState> {
 
  constructor() {
    super(createInitialNameState());
  }
 
  setName(name: string) {
    this.update({name});
  }
 
  resetName() {
    this.update(createInitialNameState());
  }
 
}