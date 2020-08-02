import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployedService } from '../../services/employed.service';
import {Employed, Departament} from '../../BBDD/entities/database-model';

@Component({
  selector: 'app-disid-modal-new-departament-view',
  templateUrl: './disid-modal-new-departament-view.component.html',
  styleUrls: ['./disid-modal-new-departament-view.component.scss']
})
export class DisidModalNewDepartamentViewComponent implements OnInit {

  public departamentModel:Departament;
  public showErrorMessage:string = '*Not valid name'

  constructor(private employedService:EmployedService, private router:Router) { }

  ngOnInit(): void {
    this.departamentModel = new Departament();
  }

  public addDepartament(departamentModel:Departament):void{
    departamentModel.name = departamentModel.name.replace(/^\s+/, '').replace(/\s+$/, '');
    if (departamentModel.name === '') {
      alert('Dont put white spaces please');
      this.router.navigateByUrl('/addDepartament');
    } else {
      // console.log(departamentModel.name);
      this.employedService.postDepartament(departamentModel).subscribe();
    }
  }

}
