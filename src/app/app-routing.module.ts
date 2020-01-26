import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDetailsComponent } from './pages/forecast-details/forecast-details.component';
import { LoginFormComponent } from './login-module/login-form/login-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full'},
  { path: 'login-page', component: LoginFormComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'forecast-details/:id', component: ForecastDetailsComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ForecastDetailsComponent, HomePageComponent]

