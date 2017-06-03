/**
 * Created by david on 20/05/17.
 */

import { HomeComponent } from './home.component';

describe('HomeComponent (inline template)', () => {

  let comp: HomeComponent;

  beforeEach(() => {
      comp = new HomeComponent();
  });

  it('should define title when HomeComponent gets initialise', () => {
      expect(comp.title).toEqual('Tour of Heroes');
  });

});
