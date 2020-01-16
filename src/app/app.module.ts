import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './components/today/today.component';
import { HttpClientModule } from '@angular/common/http';
import { NextDayComponent } from './components/next-days/next-day.component';
import { ListCitiesComponent } from './components/list-cities/list-cities.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FindCitiesFilterPipe } from './filters/find-cities-filter.pipe';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    NextDayComponent,
    ListCitiesComponent,
    ForecastDetailsComponent,
    HomePageComponent,
    FindCitiesFilterPipe,
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
