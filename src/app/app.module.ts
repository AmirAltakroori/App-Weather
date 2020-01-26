import { LoginModule } from './login-module/login-module.module';
import { WeatherDataService } from './services/weather-data.service';
import { ClimateConvarterService } from './services/climate-convarter.service';
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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ForecastDetailsComponent } from './pages/forecast-details/forecast-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    NextDayComponent,
    ListCitiesComponent,
    ForecastDetailsComponent,
    HomePageComponent,
    FindCitiesFilterPipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    LoginModule
  ],
  providers: [ ClimateConvarterService, WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
