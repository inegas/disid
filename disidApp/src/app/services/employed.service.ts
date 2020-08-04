import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employed, Departament } from '../BBDD/entities/database-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

const URL_BASE = 'http://localhost:3000';
const URL_DEPARTAMENT = 'departament';
const URL_EMPLOYED = 'employees';

@Injectable({
  providedIn: 'root'
})
export class EmployedService {

  constructor(private http: HttpClient) { }

  public postDepartament(nameDepartament: Departament) {
    const url = `${URL_BASE}/${URL_DEPARTAMENT}`;
    return this.http.post(url, nameDepartament, httpOptions);
  }

  public postEmployed(employed: Employed) {
    const url = `${URL_BASE}/${URL_EMPLOYED}`;
    return this.http.post(url, employed, httpOptions);
  }

  public getDepartaments() {
    const url = `${URL_BASE}/${URL_DEPARTAMENT}`;
    return this.http.get(url);
  }

  public getEmployees() {
    const url = `${URL_BASE}/${URL_EMPLOYED}`;
    return this.http.get(url);
  }

  public deleteEmployed(id: number) {
    const url = `${URL_BASE}/${URL_EMPLOYED}/${id}`;
    return this.http.delete(url);
  }

  public editEmployed(employed: Employed) {
    const url = `${URL_BASE}/${URL_EMPLOYED}/${employed.id}`
    return this.http.put(url, employed, httpOptions);
  }

}
