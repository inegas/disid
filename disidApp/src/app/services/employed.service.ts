import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employed, Departament} from '../BBDD/entities/database-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

const URL_BASE = 'http://localhost:3000';
const URL_DEPARTAMENT = 'departament';
const URL_EMPLOYED = 'employed';

@Injectable({
  providedIn: 'root'
})
export class EmployedService {

  constructor(private http:HttpClient) { }

  public postDepartament(nameDepartament:Departament){
    const url = `${URL_BASE}/${URL_DEPARTAMENT}`;
    return this.http.post(url, nameDepartament, httpOptions);
  }

}
