import { CompareAngularPage } from './app.po';

describe('compare-angular App', () => {
  let page: CompareAngularPage;

  beforeEach(() => {
    page = new CompareAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
