import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EmployedService } from '../../services/employed.service';
import {Employed, Departament} from '../../BBDD/entities/database-model';

@Component({
  selector: 'app-disid-nav-view',
  templateUrl: './disid-nav-view.component.html',
  styleUrls: ['./disid-nav-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisidNavViewComponent implements OnInit {

  public departamentModel:Departament;
  public showErrorInput:string = '*El input no puede estar vacio';

  constructor(private employedService:EmployedService , private changeDetection:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.departamentModel = new Departament();
  }

  public addDepartament(departamentModel:Departament):void{
      console.log(departamentModel.name);
      this.employedService.postDepartament(departamentModel).subscribe();
  }

}
