import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoComponent } from './candidato.component';


import { CandidatoRoutingModule } from './candidato-routing.module';

const routes: Routes = [
  {
    path: '',
    component: CandidatoComponent
  }
];

@NgModule({
  declarations: [CandidatoComponent],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class CandidatoModule { }
