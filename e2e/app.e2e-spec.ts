import { Angular2CliExpressPage } from './app.po';

describe('angular2-cli-express App', () => {
  let page: Angular2CliExpressPage;

  beforeEach(() => {
    page = new Angular2CliExpressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
