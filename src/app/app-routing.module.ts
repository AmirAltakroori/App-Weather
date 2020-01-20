import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResolveLocationService } from './services/resolve-location.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDetailsComponent } from './pages/forecast-details/forecast-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'pages/home-page', pathMatch: 'full'},
  //, resolve: ResolveLocationService},
  { path: 'components/forecast-details/:city', component: ForecastDetailsComponent},
  { path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ForecastDetailsComponent, HomePageComponent]

