import { Component, OnInit } from '@angular/core';
import { RandomAPIService, Candidato } from '../../services/random-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {
  
  candidatos: Candidato[];

  constructor(
      private _randomAPIService: RandomAPIService,
      private router: Router
  ) { 
    this._randomAPIService.getAllUsers().subscribe((data:  any) => {
      this.candidatos = data.results;
      console.log(this.candidatos);
    },
    (error) =>{
      console.log('Errors: ', error)
    });
   }

  ngOnInit() {
    console.log("Todos")
  }

}
