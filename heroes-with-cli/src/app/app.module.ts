import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {TagInputModule} from 'ng2-tag-input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HomeComponent } from './homeComponent/home.component';
import { DashboardComponent } from './dashboardComponent/dashboard.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';
import {HeroSearchComponent} from './heroSearchComponen/hero-search.component';
import { HeroService } from './services/hero.service';
import {TagService} from './services/tag.service';
import {HighlightDirective} from './directives/highlight.directive';
import {TagComponent} from './tagComponent/tag.component';

@NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2Bs3ModalModule,
        TagInputModule,
        BrowserAnimationsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
      ],
      declarations: [
        HighlightDirective,
        HomeComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        TagComponent
      ],
      providers: [HeroService, TagService ],
      bootstrap: [ HomeComponent ]
})

export class AppModule { }
