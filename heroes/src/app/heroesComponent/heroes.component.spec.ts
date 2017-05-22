/**
 * Created by david on 19/05/17.
 */
import {HeroesComponent} from './heroes.component';
import {Router} from '@angular/router';
import {HeroService} from '../services/hero.service';
import {Hero} from '../hero';
import {Http} from '@angular/http';
/*
const HEROES: Hero[] = [
  {id: 1, name: 'Bob'},
  {id: 2, name: 'Wood'},
  {id: 3, name: 'Ted'},
  {id: 4, name: 'Alice'},
  {id: 5, name: 'Welsh'},
  {id: 6, name: 'Clair'}]; // length of 6

class FakeHeroService extends HeroService {

  private heroes = HEROES;
  public lastPromise: Promise<any>;  // remember so we can spy on promise calls

  getHeroes() {
    return this.lastPromise = Promise.resolve<Hero[]>(this.heroes);
  }
}

class FakeRouter {
  navigateByUrl(url: string) {
    return url;
  }
  navigate(url: String, id: number) {
  }
}
describe('HeroesComponent', () => {

  let comp: HeroesComponent;
  let heroService: FakeHeroService;
  let router: Router;

  beforeEach(() => {
    heroService = new FakeHeroService();
    router = new FakeRouter() as any as Router;
    comp = new HeroesComponent(heroService, router);
  });

  it('should NOT have heroes before calling OnInit', () => {
    expect(comp.heroes.length).toBe(0, 'should not have heroes before OnInit');
  });

  it('should NOT have heroes immediately after OnInit', () => {
    comp.ngOnInit(); // ngOnInit -> getHeroes
    expect(comp.heroes.length).toBe(0, 'should not have heroes until service promise resolves');
  });

  it('should HAVE all list of available heroes after HeroService gets them', () => {
    comp.ngOnInit(); // ngOnInit -> getHeroes
    heroService.lastPromise // the one from getHeroes
      .then(() => {
        expect(comp.heroes.length).toBeGreaterThan(0, 'should have heroes after service promise resolves');
        expect(comp.heroes.length).toBe(6);
        expect(comp.half).toBe(3);
        expect(comp.heroes[0]).toEqual({id: 1, name: 'Bob'});
        expect(comp.heroes[comp.heroes.length - 1]).toEqual({id: 6, name: 'Clair'});
      });
  });

  it('should have select hero when onSelect with hero is called', () => {
    expect(comp.selectedHero).toBeUndefined();
    comp.onSelect(HEROES[0]);
    expect(comp.selectedHero).toEqual({id: 1, name: 'Bob'});
  });

  it('should redirect to detail + id when gotoDetail with hero is called', () => {
    // first it needs to select hero
    expect(comp.selectedHero).toBeUndefined();
    comp.onSelect(HEROES[1]);
    expect(comp.selectedHero).toEqual({id: 2, name: 'Wood'});
    spyOn(router, 'navigate').and.callThrough();
    comp.gotoDetail();
    expect(router.navigate).toHaveBeenCalledWith([ '/detail', 2 ]);
  });

});
*/