import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {TagInputModule} from 'ng2-tag-input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import {ToasterModule, ToasterService} from 'angular2-toaster';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { HomeComponent } from './homeComponent/home.component';
import { DashboardComponent } from './dashboardComponent/dashboard.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';
import { DragDropComponent} from './dragDropComponent/drag.drop.component';
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
        ToasterModule,
        Ng2DragDropModule,
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
        TagComponent,
        DragDropComponent
      ],
      providers: [HeroService, TagService, ToasterService ],
      bootstrap: [ HomeComponent ]
})

export class AppModule { }
