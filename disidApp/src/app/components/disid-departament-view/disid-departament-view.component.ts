import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Departament } from '../../BBDD/entities/database-model';
import { EmployedService } from '../../services/employed.service';

@Component({
  selector: 'app-disid-departament-view',
  templateUrl: './disid-departament-view.component.html',
  styleUrls: ['./disid-departament-view.component.scss']
})
export class DisidDepartamentViewComponent implements OnInit {

  public departamentModel: Departament

  constructor(private serviceDepartament: EmployedService) { }

  ngOnInit(): void {
    this.departamentModel = new Departament();
  }

  departamentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20),]),
  })

  public onFormSubmit(departamentData: Departament) {
    departamentData.name = departamentData.name.replace(/^\s+/, '').replace(/\s+$/, '');
    if (departamentData.name === '') {
     alert('Dont put white spaces please');
    } else {
      this.serviceDepartament.postDepartament(departamentData).subscribe();
      this.departamentModel.name = '';
    }
  }
}