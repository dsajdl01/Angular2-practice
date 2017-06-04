import { Component } from '@angular/core';

@Component({
      moduleId: module.id.toString(),
      selector: 'home-app',
      template: `
           <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/heroes" >Heroes</a>
                    <a routerLink="/dashboard">Dashboard</a>
                    <a routerLink="/tags">Tag</a>
                    <a routerLink="/dragDrop">Drag Drop</a>
                    <a (click)="modal.open()">About</a>
                </nav>
                <router-outlet></router-outlet>

                <modal #modal [animation]="false">
                    <modal-header [show-close]="true">
                        <h4 class="modal-title">About Hero Application</h4>
                    </modal-header>
                    <modal-body>
                        <p myHighlight>
                            Heroes application is about to get familiar with Angular 2 framework by following
                            tutorial from  angular.io QUICKSTART on the following website:<br />
                            https://angular.io/docs/ts/latest/tutorial/</p><br/>
                        <p myHighlight>
                            Heroes application also has some additional features such as Angular2 Bootstrap Modal to get
                            familiar with Angular 2 libraries and inject them into the application.
                        </p>
                    </modal-body>
                    <modal-footer [show-default-buttons]="false"></modal-footer>
                </modal>
           `,
            styleUrls: ['./home.component.css']
})

export class HomeComponent {

     title = 'Tour of Heroes';

}
