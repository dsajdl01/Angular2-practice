"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Tour of Heroes';
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'home-app',
        template: "\n           <h1>{{title}}</h1>\n                <nav>\n                    <a routerLink=\"/heroes\" >Heroes</a>\n                    <a routerLink=\"/dashboard\">Dashboard</a>\n                    <a (click)=\"modal.open()\">About</a>\n                </nav>\n                <router-outlet></router-outlet>\n\n                <modal #modal [animation]=\"false\">\n                    <modal-header [show-close]=\"true\">\n                        <h4 class=\"modal-title\">About Hero Application</h4>\n                    </modal-header>\n                    <modal-body>\n                        <p myHighlight>\n                            Heroes application is about to get familiar with Angular 2 framework by following\n                            tutorial from  angular.io QUICKSTART on the following website:<br />\n                            https://angular.io/docs/ts/latest/tutorial/</p><br/>\n                        <p myHighlight>\n                            Heroes application also has some additional features such as Angular2 Bootstrap Modal to get\n                            familiar with Angular 2 libraries and inject them into the application.\n                        </p>\n                    </modal-body>\n                    <modal-footer [show-default-buttons]=\"false\"></modal-footer>\n                </modal>\n           ",
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map