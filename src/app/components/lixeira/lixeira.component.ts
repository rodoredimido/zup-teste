import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lixeira',
  templateUrl: './lixeira.component.html',
  styleUrls: ['./lixeira.component.less']
})
export class LixeiraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("lixeira")
  }

}
