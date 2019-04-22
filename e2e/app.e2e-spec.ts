import { UsdBtcVesPage } from './app.po';

describe('usd-btc-ves App', function() {
  let page: UsdBtcVesPage;

  beforeEach(() => {
    page = new UsdBtcVesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
