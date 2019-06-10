import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TransferDataComponentService } from '../../../services/transfer-data-component.service';



@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {


  @Input() url = '';

  constructor( private router: Router,
    private _transferData: TransferDataComponentService, ) {
   // console.log(this.router.url);

   }

  ngOnInit() {
    // console.log("Atendidos")
    this._transferData.onGetDataUrl.subscribe(url => {
      this.url = url;
    });
  }

  getUrl(url: string) {
   // console.log(this.router.url);
    return (this.router.url === url);
  }

}
