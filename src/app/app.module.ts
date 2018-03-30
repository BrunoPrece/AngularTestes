import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaleraComponent } from './galera/galera.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';

const appRoutes:Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'faleconosco', component: FaleconoscoComponent },
  { path:'galera', component: GaleraComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleraComponent,
    FaleconoscoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
