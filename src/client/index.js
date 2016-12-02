import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import stores from '../shared/stores';
import App from './components/App';

render(
  <AppContainer>
    <App stores={stores} />
  </AppContainer>,
  document.getElementById('root')
);

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
