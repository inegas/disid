import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisidTableViewComponent } from './components/disid-table-view/disid-table-view.component';
import { DisidNavViewComponent } from './components/disid-nav-view/disid-nav-view.component';
import { DisidCreateEmployedViewComponent } from './components/disid-employed-view/disid-employed-view.component';
import { DisidDepartamentViewComponent } from './components/disid-departament-view/disid-departament-view.component';


@NgModule({
  declarations: [
    AppComponent,
    DisidTableViewComponent,
    DisidNavViewComponent,
    DisidCreateEmployedViewComponent,
    DisidDepartamentViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
