import { Component } from '@angular/core';

@Component({
      selector: 'home-app',
      template: `
           <h1>{{title}}</h1>
           <nav>
                <a routerLink="/heroes">Heroes</a>
                <a routerLink="/dashboard">Dashboard</a>
            </nav>
           <router-outlet></router-outlet> `,
            styleUrls: ['./home.component.css']
})

export class HomeComponent {

     title = 'Tour of Heroes';

}