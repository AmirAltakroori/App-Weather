import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { TodayComponent } from './components/today/today.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'components/today/:city', component: TodayComponent},
  { path: 'components/weather-details/:id', component: WeatherDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ TodayComponent, WeatherDetailsComponent]

