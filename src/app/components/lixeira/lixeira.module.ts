import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LixeiraComponent } from './lixeira.component';


import { LixeiraRoutingModule } from './lixeira-routing.module';
const routes: Routes = [
  {
    path: '',
    component: LixeiraComponent
  }
];

@NgModule({
  declarations: [LixeiraComponent],
  imports: [
    CommonModule,
    LixeiraRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class LixeiraModule { }
