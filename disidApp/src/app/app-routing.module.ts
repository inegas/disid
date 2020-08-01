import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisidCreateEmployedViewComponent } from './components/disid-create-employed-view/disid-create-employed-view.component';
import { DisidTableViewComponent } from './components/disid-table-view/disid-table-view.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
