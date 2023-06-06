import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { PremierLeagueGridComponent } from './premier-league-grid/premier-league-grid.component';
import { ContinentComponent } from './continent/continent.component';

import 'ag-grid-enterprise';
@NgModule({
  declarations: [AppComponent, PremierLeagueGridComponent, ContinentComponent],
  imports: [BrowserModule, HttpClientModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
