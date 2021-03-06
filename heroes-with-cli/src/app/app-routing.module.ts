import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboardComponent/dashboard.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';
import {TagComponent} from './tagComponent/tag.component';
import { DragDropComponent} from './dragDropComponent/drag.drop.component';

const routes: Routes = [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'heroes',     component: HeroesComponent },
      { path: 'tags',     component: TagComponent },
      { path: 'dragDrop',     component: DragDropComponent }
];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
})
export class AppRoutingModule {}
