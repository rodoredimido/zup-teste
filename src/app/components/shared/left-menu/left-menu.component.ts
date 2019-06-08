import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {


  @Input() url: string;

  constructor( private router: Router ) {
   // console.log(this.router.url);
   
   }

  ngOnInit() {
    //console.log("Atendidos")
  }

  getUrl(url: string){
   // console.log(this.router.url);
    return (this.router.url == url);
  }

}
