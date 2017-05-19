import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './homeComponent/home.component';
import { DashboardComponent } from './dashboardComponent/dashboard.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';
import { HeroService } from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
      ],
      declarations: [
        HomeComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
      ],
      providers: [HeroService ],
      bootstrap: [ HomeComponent ]
})

export class AppModule { }
