import { NgReduxChatPage } from './app.po';

describe('ng-redux-chat App', function() {
  let page: NgReduxChatPage;

  beforeEach(() => {
    page = new NgReduxChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
