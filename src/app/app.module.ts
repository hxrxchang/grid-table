import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridPlayerTableComponent } from './pages/grid-player-table/grid-player-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPlayerTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
