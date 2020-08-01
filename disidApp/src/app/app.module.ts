import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisidTableViewComponent } from './components/disid-table-view/disid-table-view.component';
import { DisidNavViewComponent } from './components/disid-nav-view/disid-nav-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DisidTableViewComponent,
    DisidNavViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
