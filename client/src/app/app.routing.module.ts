 import { RouterModule, Routes } from '@angular/router';
 import { AppComponent } from './app.component';
 import { NgModule } from '@angular/core'; 
 import { HomeComponent } from './components/home/home.component'
 import { DashboardComponent } from './components/dashboard/dashboard.component'

 const appRoutes: Routes = [
    {   path: '', component: HomeComponent },
    {   path: 'dashboard', component: DashboardComponent },
    {   path: '**', component: HomeComponent }
 ];

 @NgModule({
     imports: [RouterModule.forRoot(appRoutes)],
     exports: [RouterModule]
 })
 export class AppRoutingModule {

 }