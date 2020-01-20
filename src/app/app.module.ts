import { WeatherDataService } from './services/weather-data.service';
import { ClimateConvarterService } from './services/climate-convarter.service';
import { ResolveLocationService } from './services/resolve-location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './components/today/today.component';
import { HttpClientModule } from '@angular/common/http';
import { NextDayComponent } from './components/next-days/next-day.component';
import { ListCitiesComponent } from './components/list-cities/list-cities.component';
import { FormsModule } from '@angular/forms';
import { FindCitiesFilterPipe } from './filters/find-cities-filter.pipe';
import { WeatherComponent } from './components/weather/weather.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ForecastDetailsComponent } from './pages/forecast-details/forecast-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    NextDayComponent,
    ListCitiesComponent,
    ForecastDetailsComponent,
    HomePageComponent,
    FindCitiesFilterPipe,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [ResolveLocationService, ClimateConvarterService, WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
