import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDetailsComponent } from './pages/forecast-details/forecast-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'routingComponents/home-page', pathMatch: 'full'},
  { path: 'components/forecast-details/:city', component: ForecastDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ForecastDetailsComponent]

