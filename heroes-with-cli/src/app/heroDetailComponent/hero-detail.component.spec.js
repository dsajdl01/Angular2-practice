"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_detail_component_1 = require("./hero-detail.component");
// Only implements params and part of snapshot.params
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ActivatedRouteStub = (function () {
    function ActivatedRouteStub() {
        // ActivatedRoute.params is Observable
        this.subject = new BehaviorSubject_1.BehaviorSubject(this.testParams);
        this.params = this.subject.asObservable();
    }
    Object.defineProperty(ActivatedRouteStub.prototype, "testParams", {
        get: function () {
            return this._testParams;
        },
        set: function (params) {
            this._testParams = params;
            this.subject.next(params);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteStub.prototype, "snapshot", {
        // ActivatedRoute.snapshot.params
        get: function () {
            return { params: this.testParams };
        },
        enumerable: true,
        configurable: true
    });
    return ActivatedRouteStub;
}());
ActivatedRouteStub = __decorate([
    core_1.Injectable()
], ActivatedRouteStub);
describe('HeroDetailComponent - no TestBed', function () {
    var HEROES = [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Wood' },
        { id: 3, name: 'Ted' },
        { id: 4, name: 'Alice' },
        { id: 5, name: 'Welsh' },
        { id: 6, name: 'Clair' }
    ]; // length of 6
    var activatedRoute;
    var comp;
    var expectedHero;
    var location;
    var heroServiceMock;
    beforeEach(function (done) {
        expectedHero = HEROES[0];
        activatedRoute = new ActivatedRouteStub();
        activatedRoute.testParams = { id: expectedHero.id };
        location = jasmine.createSpyObj('location', ['back']);
        heroServiceMock = jasmine.createSpyObj('HeroService', ['getHero']);
        heroServiceMock.getHero.and.returnValue(Promise.resolve(expectedHero));
        comp = new hero_detail_component_1.HeroDetailComponent(heroServiceMock, activatedRoute, location);
        comp.ngOnInit();
        // OnInit calls HDS.getHero; wait for it to get the fake hero
        heroServiceMock.getHero.calls.first().returnValue.then(done);
    });
    it('should expose the hero retrieved from the service', function () {
        expect(comp.hero).toBe(expectedHero);
        expect(heroServiceMock.getHero).toHaveBeenCalledWith(expectedHero.id);
    });
    it('should call location back when goBack() is called', function () {
        comp.goBack();
        expect(location.back).toHaveBeenCalled();
    });
});
//# sourceMappingURL=hero-detail.component.spec.js.map