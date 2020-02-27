import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  test('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Ragnar app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(expect.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
