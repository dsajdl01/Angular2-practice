"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var hero_service_1 = require("../services/hero.service");
var HEROES = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Wood' },
    { id: 3, name: 'Ted' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Welsh' },
    { id: 6, name: 'Clair' }
];
var FakeHeroService = (function (_super) {
    __extends(FakeHeroService, _super);
    function FakeHeroService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FakeHeroService;
}(hero_service_1.HeroService));
exports.FakeHeroService = FakeHeroService;
describe('DashboardComponent', function () {
    /*
      let comp: DashboardComponent;
      let heroService: FakeHeroService;
    
      beforeEach(() => {
        heroService = new FakeHeroService();
        comp = new DashboardComponent(heroService);
      });
    
      it('should NOT have heroes before calling OnInit', () => {
        expect(comp.heroes.length).toBe(0, 'should not have heroes before OnInit');
      });
    
      it('should NOT have heroes immediately after OnInit', () => {
        comp.ngOnInit();
        expect(comp.heroes.length).toBe(0, 'should not have heroes until service promise resolves');
      });
    
      it('should HAVE 4 heroes after HeroService gets them with order: Wood, Ted, Alice and Welsh', () => {
        comp.ngOnInit(); // ngOnInit -> getHeroes
        heroService.lastPromise // the one from getHeroes
          .then(() => {
            expect(comp.heroes.length).toBeGreaterThan(0, 'should have heroes after service promise resolves');
            expect(comp.heroes.length).toBe(4);
            expect(comp.heroes[0].name).toEqual('Wood');
            expect(comp.heroes[1].name).toEqual('Ted');
            expect(comp.heroes[2].name).toEqual('Alice');
            expect(comp.heroes[3].name).toEqual('Welsh');
          })
      }); */
});
//# sourceMappingURL=dashboard.component.spec.js.map