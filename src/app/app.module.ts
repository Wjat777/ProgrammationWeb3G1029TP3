/*
Par: William John Adam Trindade
2021-11-14
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ForfaitAPIService } from './services/forfait-api.service';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ForfaitCompletComponent } from './components/forfait-complet/forfait-complet.component';
import { ForfaitMiniComponent } from './components/forfait-mini/forfait-mini.component';
import { ForfaitRechercheComponent } from './components/forfait-recherche/forfait-recherche.component';
import { RatingStarComponent } from './components/rating-star/rating-star.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ForfaitsXComponent } from './views/forfaits-x/forfaits-x.component';
import { ForfaitsYComponent } from './views/forfaits-y/forfaits-y.component';
import { AboutComponent } from './views/about/about.component';
import { StatistiquesComponent } from './views/statistiques/statistiques.component';
import { AdministrationComponent } from './views/administration/administration.component';
import { DestinationFilter } from './search-filter.pipe';
import { ForfaitsTableComponent } from './components/forfaits-table/forfaits-table.component';
import { ForfaitDialogComponent } from './components/forfait-dialog/forfait-dialog.component';
import { ForfaitFormComponent } from './components/forfait-form/forfait-form.component';
import { HotelTableComponent } from './components/hotel-table/hotel-table.component';
import { HotelDialogComponent } from './components/hotel-dialog/hotel-dialog.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { Graphique1Component } from './components/graphique1/graphique1.component';
@NgModule({
  declarations: [
    AppComponent,
    ForfaitCompletComponent,
    ForfaitMiniComponent,
    ForfaitRechercheComponent,
    RatingStarComponent,
    NavbarComponent,
    HomeComponent,
    ForfaitsXComponent,
    ForfaitsYComponent,
    AboutComponent,
    AdministrationComponent,
    StatistiquesComponent,
    DestinationFilter,
    ForfaitsTableComponent,
    ForfaitDialogComponent,
    ForfaitFormComponent,
    HotelTableComponent,
    HotelDialogComponent,
    HotelFormComponent,
    Graphique1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    NgChartsModule,
  ],
  providers: [ForfaitAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
