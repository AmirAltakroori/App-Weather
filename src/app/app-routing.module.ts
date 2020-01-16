import { ListCitiesComponent } from './components/list-cities/list-cities.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodayComponent } from './components/today/today.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'components/home-page', pathMatch: 'full'},
  { path: 'components/list-cities', component: ListCitiesComponent},
  { path: 'components/forecast-details/:id', component: ForecastDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ListCitiesComponent, ForecastDetailsComponent]

