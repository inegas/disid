import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Employed } from '../../BBDD/entities/database-model';

@Component({
  selector: 'app-disid-employed-view',
  templateUrl: './disid-employed-view.component.html',
  styleUrls: ['./disid-employed-view.component.scss']
})
export class DisidCreateEmployedViewComponent implements OnInit {


  public employedModel: Employed;
  public employedModelOutput:Employed;
  constructor() { }

  ngOnInit(): void {
    this.employedModel = new Employed();
  }

  employedForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, , Validators.maxLength(10)]),
    entryDate: new FormControl('', [Validators.required, , Validators.maxLength(10)]),
  })

  public onFormSubmit(employedData: Employed): void {
    this.getAgeEmployed(employedData);
    this.getEntryDate(employedData);

    let age = this.getAgeEmployed(employedData);
    console.log(age + 'im god');
    let entryDate = this.getEntryDate(employedData);
    console.log(entryDate + 'im to god');

    this.employedModelOutput = {
      name: this.employedModel.name,
      lastName: this.employedModel.lastName,
      age: age,
      entryDate: entryDate
    }

    console.log(this.employedModelOutput);
    
  }

  private getAgeEmployed(employedData: Employed): number {
    let getEmployedDate: Date = new Date(employedData.age);
    let getemployedYear: number = Number(getEmployedDate.getFullYear());

    let getActualDate: Date = new Date();
    let getActualYear: number = Number(getActualDate.getFullYear());

    let getAgeEmployed: number = getActualYear - getemployedYear;

    return getAgeEmployed;
  }

  private getEntryDate(employedData: Employed): Date {
    let getEntryDate: Date = new Date(employedData.entryDate);

    return getEntryDate;
  }

}
