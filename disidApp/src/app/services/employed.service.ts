import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

const URL_BASE = 'http://localhost:3000/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployedService {

  constructor(private http:HttpClient) { }
}
