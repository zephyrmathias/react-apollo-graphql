import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import App from './components/App';

const Application = (
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
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
