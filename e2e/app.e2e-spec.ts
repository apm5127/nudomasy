import { NudomasyPage } from './app.po';

describe('nudomasy App', function() {
  let page: NudomasyPage;

  beforeEach(() => {
    page = new NudomasyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
