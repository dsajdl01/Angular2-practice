import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HomeComponent } from './homeComponent/home.component';
import { DashboardComponent } from './dashboardComponent/dashboard.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';
import {HeroSearchComponent} from './heroSearchComponen/hero-search.component';
import { HeroService } from './services/hero.service';

@NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
      ],
      declarations: [
        HomeComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
      ],
      providers: [HeroService ],
      bootstrap: [ HomeComponent ]
})

export class AppModule { }
