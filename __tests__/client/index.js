describe('init', () => {
  const rootEl = document.createElement('div');
  rootEl.id = 'root';
  document.body.appendChild(rootEl);

  require('../../src/client/'); // eslint-disable-line

  it('should render the app to the page', () => {
    const app = document.querySelector('.app');
    expect(app).toBeTruthy();
    expect(app.className).toBe('app');
  });
});
