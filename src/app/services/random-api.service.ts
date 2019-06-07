import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RandomAPIService {

  API_URL =  'https://randomuser.me/api/';
  API_ARG_USERS = '?results=100&nat=br';
  constructor( private _httpClient: HttpClient ) { }

  getAllUsers(){
    return /*'hola'; */this._httpClient.get(`${this.API_URL}${this.API_ARG_USERS}`);
  }
  getUsers(){
    return /*'hola'; */this._httpClient.get(`${this.API_URL}`);
  }
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Namec {
  first: string;
  last: string;
  title: string;
}

interface Location {
  city: string;
  state: string;
}


export interface Candidato{
  picture?: Picture;
  name: Namec;
  email: string;
  cell: string;
  phone: string;
  location: Location;
  att?: boolean;
}

