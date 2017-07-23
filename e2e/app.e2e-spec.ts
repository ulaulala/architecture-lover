import { ArchitectureLoverAngularPage } from './app.po';

describe('architecture-lover-angular App', () => {
  let page: ArchitectureLoverAngularPage;

  beforeEach(() => {
    page = new ArchitectureLoverAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
