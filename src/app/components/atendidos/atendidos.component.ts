import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-atendidos',
  templateUrl: './atendidos.component.html',
  styleUrls: ['./atendidos.component.less']
})
export class AtendidosComponent implements  OnInit {

  constructor() { }

  ngOnInit() {
    console.log("atendidos")
  }


}
