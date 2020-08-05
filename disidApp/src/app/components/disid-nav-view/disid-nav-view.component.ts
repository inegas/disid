import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-disid-nav-view',
  templateUrl: './disid-nav-view.component.html',
  styleUrls: ['./disid-nav-view.component.scss'],
})
export class DisidNavViewComponent implements OnInit {

  @Output() employedNameOutput: EventEmitter<string> = new EventEmitter<string>();
  @Output() entryDateOutput: EventEmitter<Date> = new EventEmitter<Date>();

  public employedName:string;
  public dateEntry:Date;

  constructor(){}

  ngOnInit():void {}

  public getEmployedInput():void {
    console.log(this.employedName);
    this.employedNameOutput.emit(this.employedName);
  }

  public getEntryDate():void {
    console.log(this.dateEntry);
    this.entryDateOutput.emit(this.dateEntry);
  }

}
