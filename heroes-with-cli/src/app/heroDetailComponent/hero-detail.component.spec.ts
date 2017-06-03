/**
 * Created by david on 20/05/17.
 */
import {Hero} from '../hero';
import {Injectable} from '@angular/core';
import {HeroDetailComponent} from './hero-detail.component';

// Only implements params and part of snapshot.params
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HeroService} from '../services/hero.service';

@Injectable()
class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() {
    return this._testParams;
  }

  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return {params: this.testParams};
  }
}


describe('HeroDetailComponent - no TestBed', () => {

  const HEROES: Hero[] = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Wood'},
    {id: 3, name: 'Ted'},
    {id: 4, name: 'Alice'},
    {id: 5, name: 'Welsh'},
    {id: 6, name: 'Clair'}]; // length of 6

  let activatedRoute: ActivatedRouteStub;
  let comp: HeroDetailComponent;
  let expectedHero: Hero;
  let location: any;
  let heroServiceMock: any;

  beforeEach((done: any) => {
    expectedHero = HEROES[0];
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.testParams = { id: expectedHero.id };

    location = jasmine.createSpyObj('location', ['back']);

    heroServiceMock = jasmine.createSpyObj('HeroService', ['getHero']);
    heroServiceMock.getHero.and.returnValue(Promise.resolve(expectedHero));

    comp = new HeroDetailComponent(heroServiceMock, <any> activatedRoute, location);
    comp.ngOnInit();

    // OnInit calls HDS.getHero; wait for it to get the fake hero
    heroServiceMock.getHero.calls.first().returnValue.then(done);
  });

  it('should expose the hero retrieved from the service', () => {
    expect(comp.hero).toBe(expectedHero);
    expect(heroServiceMock.getHero).toHaveBeenCalledWith(expectedHero.id);
  });

  it('should call location back when goBack() is called', () => {
    comp.goBack();
    expect(location.back).toHaveBeenCalled();
  });

});
