import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import stores from '../shared/stores';

render(
  <AppContainer>
    <App stores={stores} />
  </AppContainer>,
  document.getElementById('root')
);

/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line

    render(
      <AppContainer>
        <NextApp stores={stores} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
