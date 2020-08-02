import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisidTableViewComponent } from './components/disid-table-view/disid-table-view.component';
import { DisidNavViewComponent } from './components/disid-nav-view/disid-nav-view.component';
import { DisidCreateEmployedViewComponent } from './components/disid-employed-view/disid-employed-view.component';
import { DisidModalConfirmViewComponent } from './modals/disid-modal-confirm-view/disid-modal-confirm-view.component';
import { DisidModalNewDepartamentViewComponent } from './modals/disid-modal-new-departament-view/disid-modal-new-departament-view.component';
import { DisidModalDeleteEmployedViewComponent } from './modals/disid-modal-delete-employed-view/disid-modal-delete-employed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DisidTableViewComponent,
    DisidNavViewComponent,
    DisidCreateEmployedViewComponent,
    DisidModalConfirmViewComponent,
    DisidModalNewDepartamentViewComponent,
    DisidModalDeleteEmployedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
