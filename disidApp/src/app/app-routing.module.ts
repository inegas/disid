import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisidCreateEmployedViewComponent } from './components/disid-employed-view/disid-employed-view.component';
import { DisidTableViewComponent } from './components/disid-table-view/disid-table-view.component';
import { DisidDepartamentViewComponent } from './components/disid-departament-view/disid-departament-view.component';


const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home', component:DisidTableViewComponent
  },
  {
    path: 'addEmployed', component: DisidCreateEmployedViewComponent
  },
  {
    path: 'addDepartament', component: DisidDepartamentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
