import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisidCreateEmployedViewComponent } from './components/disid-employed-view/disid-employed-view.component';
import { DisidTableViewComponent } from './components/disid-table-view/disid-table-view.component';
import { DisidModalConfirmViewComponent } from './modals/disid-modal-confirm-view/disid-modal-confirm-view.component';
import { DisidModalDeleteEmployedViewComponent } from './modals/disid-modal-delete-employed-view/disid-modal-delete-employed-view.component';
import { DisidModalNewDepartamentViewComponent } from './modals/disid-modal-new-departament-view/disid-modal-new-departament-view.component';

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
    path: 'addDepartament', component: DisidModalNewDepartamentViewComponent
  },
  {
    path: 'deleteEmployed', component: DisidModalDeleteEmployedViewComponent
  },
  {
    path: 'confirmEmployed', component: DisidModalConfirmViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
