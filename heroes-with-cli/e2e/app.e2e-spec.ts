import { HeroesWithCliPage } from './app.po';

describe('heroes-with-cli App', () => {
  let page: HeroesWithCliPage;

  beforeEach(() => {
    page = new HeroesWithCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
