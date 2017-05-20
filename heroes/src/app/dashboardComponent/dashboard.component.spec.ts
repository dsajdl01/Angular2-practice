/**
 * Created by david on 20/05/17.
 */
import {DashboardComponent} from './dashboard.component';
import {HeroService} from '../services/hero.service';
import {Hero} from '../hero';


const HEROES: Hero[] = [
  { id: 1, name: 'Bob'},
  { id: 2, name: 'Wood'},
  { id: 3, name: 'Ted'},
  { id: 4, name: 'Alice'},
  { id: 5, name: 'Welsh'},
  { id: 6, name: 'Clair'}];

export class FakeHeroService extends HeroService {

  public lastPromise: Promise<any>;
  constructor() {
    super();
  }

  getHeroes() {
    return this.lastPromise = Promise.resolve<Hero[]>(HEROES);
  }
}


describe('DashboardComponent', () => {

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
  });
});
