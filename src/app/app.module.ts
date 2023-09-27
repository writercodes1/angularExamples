import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { PerentchilddataComponent } from './perentchilddata/perentchilddata.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { DashModule } from './dash/dash.module';
import { Dash1Module } from './dash1/dash1.module';

@NgModule({
  declarations: [
    AppComponent,
    // StudentComponent,
    // PerentchilddataComponent,
    // WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Dash1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
