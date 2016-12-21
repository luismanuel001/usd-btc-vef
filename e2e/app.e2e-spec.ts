import { UsdBtcVefPage } from './app.po';

describe('usd-btc-vef App', function() {
  let page: UsdBtcVefPage;

  beforeEach(() => {
    page = new UsdBtcVefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
