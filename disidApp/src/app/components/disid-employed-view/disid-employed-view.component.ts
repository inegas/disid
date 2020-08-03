import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Employed, Departament } from '../../BBDD/entities/database-model';
import { EmployedService } from '../../services/employed.service';

@Component({
  selector: 'app-disid-employed-view',
  templateUrl: './disid-employed-view.component.html',
  styleUrls: ['./disid-employed-view.component.scss']
})
export class DisidCreateEmployedViewComponent implements OnInit {


  public employedModel: Employed;
  public employedModelOutput:Employed;
  public allDepartaments:Departament[];

  constructor(private service: EmployedService) { }

  ngOnInit(): void {
    this.employedModel = new Employed();
    this.employedModel.departament = new Departament();
    this.getDepartaments();
  }

  public getDepartaments(){
    this.service.getDepartaments().subscribe(
      (data:Departament[]) =>{
        this.allDepartaments = data;
        console.log(this.allDepartaments);
      })
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
      entryDate: entryDate,
      departament: this.employedModel.departament
    }
    console.log(this.employedModelOutput);
  }

  public getDepartamentValue(event){
    this.employedModel.departament.name = event.target.value;
  }

  public setEmployed(){
    this.service.postEmployed(this.employedModelOutput).subscribe();
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
