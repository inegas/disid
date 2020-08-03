import { Component, OnInit } from '@angular/core';
import { EmployedService } from '../../services/employed.service';
import { Employed, Departament } from '../../BBDD/entities/database-model';

@Component({
  selector: 'app-disid-table-view',
  templateUrl: './disid-table-view.component.html',
  styleUrls: ['./disid-table-view.component.scss']
})
export class DisidTableViewComponent implements OnInit {

  public employedList:Employed[];

  constructor(private service:EmployedService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  public getAllEmployees(){
    this.service.getEmployees().subscribe(
      (data:Employed[]) =>{
        this.employedList = data;
        console.log(this.employedList);
        
      })
  }

}
