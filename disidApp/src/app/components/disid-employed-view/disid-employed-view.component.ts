import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Employed, Departament } from '../../BBDD/entities/database-model';
import { EmployedService } from '../../services/employed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disid-employed-view',
  templateUrl: './disid-employed-view.component.html',
  styleUrls: ['./disid-employed-view.component.scss']
})
export class DisidCreateEmployedViewComponent implements OnInit {


  public employedModel: Employed;
  public employedModelOutput: Employed;
  public allDepartaments: Departament[];
  public infoEmployed: Employed;

  constructor(private service: EmployedService, private router: Router) { }

  ngOnInit(): void {
    this.employedModel = new Employed();
    this.employedModel.departament = new Departament();
    this.getDepartaments();
    this.infoEmployed = this.getEmployedToEdit();
    if (this.infoEmployed === null) {

      this.employedModel = new Employed();
      this.employedModel.departament = new Departament();

    } else {

      this.employedModel.name = this.infoEmployed.name;
      this.employedModel.age = this.infoEmployed.age;
      this.employedModel.entryDate = this.infoEmployed.entryDate;
      this.employedModel.lastName = this.infoEmployed.lastName;
      this.employedModel.departament = this.infoEmployed.departament;
    }

  }

  public getDepartaments() {
    this.service.getDepartaments().subscribe(
      (data: Departament[]) => {
        this.allDepartaments = data;
        //console.log(this.allDepartaments);
      })
  }

  public employedForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, , Validators.maxLength(10)]),
    entryDate: new FormControl('', [Validators.required, , Validators.maxLength(10)]),
  })

  public employedEditForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  })

  public onFormSubmit(employedData: Employed): void {
    this.getAgeEmployed(employedData);
    this.getEntryDate(employedData);

    let age = this.getAgeEmployed(employedData);
    //console.log(age + 'im god');
    let entryDate = this.getEntryDate(employedData);
    //console.log(entryDate + 'im to god');

    this.employedModelOutput = {
      name: this.employedModel.name,
      lastName: this.employedModel.lastName,
      age: age,
      entryDate: entryDate,
      departament: this.employedModel.departament
    }
    //console.log(this.employedModelOutput);
  }

  public onFormEditSubmit(): void {

    this.employedModelOutput = {
      name: this.infoEmployed.name,
      lastName: this.infoEmployed.lastName,
      age: this.infoEmployed.age,
      entryDate: this.infoEmployed.entryDate,
      departament: this.infoEmployed.departament,
      id: this.infoEmployed.id
    }
    //console.log(this.employedModelOutput);
  }

  public getDepartamentValue(event): void {
    this.employedModel.departament.name = event.target.value;
    //console.log(this.employedModel.departament.name);

  }

  public getDepartamentValue2(event): void {
    this.infoEmployed.departament.name = event.target.value;
    //console.log(this.infoEmployed.departament.name);

  }

  public setEmployed(): void {
    this.service.postEmployed(this.employedModelOutput).subscribe();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
    });
    this.router.navigateByUrl('/home');
  }

  public editEmployed(): void {
    this.service.editEmployed(this.infoEmployed).subscribe();
    localStorage.removeItem('employed');
    this.router.navigateByUrl('/home');
  }

  public cleanLocalStorage(): void {
    if (this.infoEmployed) {
      localStorage.removeItem('employed');
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/home');
    }
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

  private getEmployedToEdit() {
    let employed: Employed = JSON.parse(localStorage.getItem('employed'));
    return employed;
  }

}
