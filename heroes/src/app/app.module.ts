import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './homeComponent/app.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';

@NgModule({
      imports: [
        BrowserModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeroDetailComponent
      ],
      bootstrap: [ AppComponent ]
})

export class AppModule { }
