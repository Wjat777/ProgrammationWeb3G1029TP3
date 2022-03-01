import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AdministrationComponent } from './views/administration/administration.component';
import { AboutComponent } from './views/about/about.component';
import { ForfaitsXComponent } from './views/forfaits-x/forfaits-x.component';
import { ForfaitsYComponent } from './views/forfaits-y/forfaits-y.component';
import { StatistiquesComponent } from './views/statistiques/statistiques.component';

const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Administration', component: AdministrationComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ForfaitsX', component: ForfaitsXComponent },
  { path: 'ForfaitsY', component: ForfaitsYComponent },
  { path: 'Statistiques', component: StatistiquesComponent },

  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
