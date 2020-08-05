import { Component, OnInit } from '@angular/core';
import { EmployedService } from '../../services/employed.service';
import { Employed, Departament } from '../../BBDD/entities/database-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disid-table-view',
  templateUrl: './disid-table-view.component.html',
  styleUrls: ['./disid-table-view.component.scss']
})
export class DisidTableViewComponent implements OnInit {

  public employedList: Employed[];
  public filtredDates: Employed[] = [];
  public employed: Employed;
  public departamentList: Departament[];
  public departament: Departament;
  public depFiltered: Employed[];
  public empFiltered: Employed[];

  constructor(private service: EmployedService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
    this.departament = new Departament();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['home']);
    });
    this.getAllDepartaments();

  }

  public getAllEmployees() {
    this.service.getEmployees().subscribe(
      (data: Employed[]) => {
        this.employedList = data;
        //console.log(this.employedList);
      })
  }

  public getAllDepartaments(): void {
    this.service.getDepartaments().subscribe(
      (data: Departament[]) => {
        this.departamentList = data;
        //console.log(this.departamentList);
      })
  }

  public selectEmployed(item: Employed) {
    this.employed = item;
  }

  public getDepartamentValue(event): void {
    this.departament.name = event.target.value;
    this.filterby(this.departament.name);
    //console.log(this.departament.name);

  }

  public deleteEmployed(item: Employed): void {
    //console.log(item);
    let parseItemId = Number(item.id);
    this.service.deleteEmployed(parseItemId).subscribe();
    this.getAllEmployees();
    location.reload();
  }

  public editEmployed(item: Employed): void {
    //console.log(item);
    localStorage.setItem('employed', JSON.stringify(item));
    this.router.navigateByUrl('/addEmployed');
  }

  public getEmployed(name: string): void {
    this.service.getEmployed(name).subscribe(
      (data: Employed[]) => {
        this.empFiltered = data;
        //console.log(this.empFiltered);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
        });
      })
  }

  public getEntryDate(date: Date): void {
    //console.log(date);
    this.service.getEmployees().subscribe(
      (data: Employed[]) => {
        this.employedList = data;
        this.employedList.forEach(e => {
          if (e.entryDate >= date) {
            this.filtredDates.push(e);
          }
        })
        //console.log(this.employedList);
      })
    //console.log(this.employedList);
  }

  public goBack(): void {
    location.reload();
  }

  private filterby(departament: string): void {
    this.service.filterBy(departament).subscribe(
      (data: Employed[]) => {
        this.depFiltered = data;
        //console.log(this.depFiltered);
      })
  }
}
