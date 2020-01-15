import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './components/today/today.component';
import { HttpClientModule } from '@angular/common/http';
import { NextDayComponent } from './components/next-days/next-day.component';
import { ListCitiesComponent } from './components/list-cities/list-cities.component';
import { FormsModule } from '@angular/forms';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    NextDayComponent,
    ListCitiesComponent,
    WeatherDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
