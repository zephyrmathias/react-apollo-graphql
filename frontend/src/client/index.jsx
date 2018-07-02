import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const Application = (
  <AppContainer>
    <App />
  </AppContainer>
);

const MOUNT_NODE = document.getElementById('app');

const renderApp = () => {
  ReactDOM.hydrate(
    Application,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}

renderApp();
