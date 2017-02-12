import { BookmarkerFePage } from './app.po';

describe('bookmarker-fe App', function() {
  let page: BookmarkerFePage;

  beforeEach(() => {
    page = new BookmarkerFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
