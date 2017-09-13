import { AngCliTestPage } from './app.po';

describe('ang-cli-test App', () => {
  let page: AngCliTestPage;

  beforeEach(() => {
    page = new AngCliTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
