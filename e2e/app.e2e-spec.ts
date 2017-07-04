import { Angular0Page } from './app.po';

describe('angular0 App', () => {
  let page: Angular0Page;

  beforeEach(() => {
    page = new Angular0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
